import { Block } from "../../modules/Block";

import "./styles.css";

import * as template from "./template.hbs";

interface IError {
  ecode: number;
  emessage: string;
}

class Error extends Block {
  constructor(props: IError) {
    super(props, { tagName: "div", className: "error-page" });
  }

  render():string {
    return template(this.props);
  }
}

export { Error };
