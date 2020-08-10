import { isEqual } from "../utils/isEqual";
import { render } from "../utils/render";
import { Block } from "./Block";

type ClassRef = new (attributes: Record<string, unknown>, props: Record<string, unknown>) => IBlock;

type children = { query: string; block: Block<IBlockProps> };

interface IBlockProps {
  childrens?: children[];
  [key: string]: unknown;
}

interface IBlock {
  hide: () => void;
  show: () => void;
  getContent: () => HTMLElement;
  setProps(nextProps: IBlockProps): void;
}

export class Route {
  _pathname: string;

  _blockClass: ClassRef;

  _block: IBlock;

  _props: Record<string, unknown>;

  constructor(pathname: string, view: ClassRef, props: Record<string, unknown>) {
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

  setProps(nextProps: IBlockProps): void {
    if (!nextProps) {
      return;
    }

    Object.assign(this._props, nextProps);
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
      render(<string>rootQuery, this._block);

      return;
    }
    this._block.show();
  }
}
