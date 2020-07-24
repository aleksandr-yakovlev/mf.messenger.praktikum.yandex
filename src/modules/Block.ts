import { EventBus } from "./EventBus";
import { render } from "../utils/render";

enum Events {
  INIT = "init",
  FLOW_CDM = "flow:component-did-mount",
  FLOW_CDU = "flow:component-did-update",
  FLOW_RENDER = "flow:render",
}

export class Block {
  props: {
    childrens?: { query: string; block: Block }[];
    [key: string]: any;
  }; //ProxyConstructor;
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
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
  }

  private _createResources() {
    const { attributes } = this._meta;
    this._element = this._createDocumentElement(attributes);
  }

  init() {
    this._createResources();
    this.eventBus().emit(Block.EVENTS.FLOW_CDM);
  }

  private _componentDidMount() {
    this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    this.componentDidMount();
  }

  // Может переопределять пользователь, необязательно трогать
  componentDidMount() {}

  private _componentDidUpdate(oldProps, newProps) {
    const response = this.componentDidUpdate(oldProps, newProps);
    if (response) this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
  }

  // Может переопределять пользователь, необязательно трогать
  componentDidUpdate(oldProps, newProps) {
    return true;
  }

  setProps = (nextProps) => {
    if (!nextProps) {
      return;
    }

    Object.assign(this.props, nextProps);
  };

  get element() {
    return this._element;
  }

  private _render() {
    const block = this.render();
    // Этот небезопасный метод для упрощения логики
    // Используйте шаблонизатор из npm или напиши свой безопасный
    // Нужно не в строку компилировать (или делать это правильно),
    // либо сразу в DOM-элементы превращать из возвращать из compile DOM-ноду
    if (typeof block === "object") {
      this._element.appendChild(block);
    } else {
      this._element.innerHTML = block;
    }
    const { childrens } = this.props;
    if (childrens) {
      childrens.forEach((children) => {
        render(children.query, children.block, this._element);
      });
    }
  }

  // Может переопределять пользователь, необязательно трогать
  render() {}

  getContent() {
    return this.element;
  }

  private _makePropsProxy(props) {
    // Можно и так передать this
    // Такой способ больше не применяется с приходом ES6+
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
        target[prop] = value;
        self.eventBus().emit(Block.EVENTS.FLOW_CDU);
        return true;
      },
      deleteProperty() {
        throw new Error("Отказано в доступе");
      },
    });
  }

  _createDocumentElement(attributes) {
    let element = document.createElement(attributes.tagName);
    if (attributes.className) element.className = attributes.className;
    if (attributes.id) element.className = attributes.id;
    return element;
  }

  show() {
    this.getContent().style.display = "block";
  }

  hide() {
    this.getContent().style.display = "none";
  }
}
