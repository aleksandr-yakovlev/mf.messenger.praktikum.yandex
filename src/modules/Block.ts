import { EventBus } from "./EventBus";
import { render } from "../utils/render";

enum Events {
  INIT = "init",
  FLOW_CDM = "flow:component-did-mount",
  FLOW_CDU = "flow:component-did-update",
  FLOW_SCU = "flow:should-component-update",
  FLOW_RENDER = "flow:render",
}

type children = { query: string; block: Block };

interface IBlockProps {
  childrens?: children[];
  [key: string]: any;
}

export class Block {
  props: IBlockProps;

  eventBus: () => EventBus;

  static EVENTS = Events;

  _element = null;

  _meta = null;

  constructor(
    props = {},
    attributes: { tagName: string; id?: string; className?: string } = {
      tagName: "div",
      className: "app",
    }
  ) {
    const eventBus = new EventBus();
    this._meta = {
      props,
      attributes,
    };

    this.props = this._makePropsProxy(props);

    this.eventBus = () => eventBus;

    this._registerEvents(eventBus);
    eventBus.emit(Block.EVENTS.INIT);
  }

  private _registerEvents(eventBus) {
    eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
    eventBus.on(Block.EVENTS.FLOW_SCU, this._shouldComponentUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _createResources() {
    const { attributes } = this._meta;
    this._element = this._createDocumentElement(attributes);
  }

  init():void {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    this.componentDidMount();
  }

  componentDidMount():void {}

  private _componentDidUpdate() {
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    this.componentDidUpdate();
  }

  componentDidUpdate():void {}

  private _shouldComponentUpdate() {
    const response = this.shouldComponentUpdate();
    if (response) {
      this.eventBus().emit(Block.EVENTS.FLOW_CDU);
    }
  }

  shouldComponentUpdate():boolean {
    return true;
  }

  setProps(nextProps:IBlockProps):void  {

    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);

  }

  get element():HTMLElement {
    return this._element;
  }

  private _render() {
    const block = this.render();
    if (typeof block === "object") {
      this._element.appendChild(block);
    } else {
      this._element.innerHTML = block;
    }
    const { childrens } = this.props;
    if ((childrens || []).length > 0) {
      childrens.forEach((children) => {
        render(children.query, children.block, this._element);
      });
    }
  }

  render():void {}

  getContent():HTMLElement  {
    return this.element;
  }

  private _makePropsProxy(props) {
    const self = this;

    return new Proxy(props, {
      get(target, prop: string) {
        if (prop.indexOf("_") === 0) {
          throw new Error("Отказано в доступе");
        }

        const value = target[prop];
        return typeof value === "function" ? value.bind(target) : value;
      },
      set(target, prop: string, value) {
        if (prop.indexOf("_") === 0) {
          throw new Error("Нет прав");
        }
        const tget = target;
        tget[prop] = value;
        self.eventBus().emit(Block.EVENTS.FLOW_SCU);
        return true;
      },
      deleteProperty() {
        throw new Error("Отказано в доступе");
      },
    });
  }

  _createDocumentElement(attributes:{className:string,id:string,tagName:string}):HTMLElement {
    const element = document.createElement(attributes.tagName);
    if (attributes.className) element.className = attributes.className;
    if (attributes.id) element.className = attributes.id;
    return element;
  }

  show():void {
    this.getContent().style.display = "block";
  }

  hide():void {
    this.getContent().style.display = "none";
  }
}
