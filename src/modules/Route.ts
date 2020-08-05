import { isEqual } from "../utils/isEqual";
import { render } from "../utils/render";

type ClassRef = new (
  attributes: Record<string, unknown>,
  props: Record<string, unknown>
) => IBlock;

interface IBlock {
  hide: () => void;
  show: () => void;
  getContent: () => HTMLElement;
}

export class Route {
  _pathname: string;

  _blockClass: ClassRef;

  _block: IBlock;

  _props: Record<string, any>;

  constructor(pathname: string, view: ClassRef, props: Record<string, any>) {
    this._pathname = pathname;
    this._blockClass = view;
    this._block = null;
    this._props = props;
  }

  navigate(pathname: string): void {
    if (this.match(pathname)) {
      this._pathname = pathname;
      this.render();
    }
  }

  leave(): void {
    if (this._block) {
      this._block.hide();
    }
  }

  match(pathname: string): boolean {
    return isEqual(pathname, this._pathname);
  }

  render(): void {
    if (!this._block) {
      const { rootQuery, ...restProps } = this._props;

      this._block = new this._blockClass(restProps, {
        tagName: "div",
        className: "page",
      });
      render(rootQuery, this._block);

      return;
    }
    this._block.show();
  }
}
