import { Block } from "../../modules/Block";

import "./styles.css";

const template = require("./template.hbs");

interface IError {
  ecode: number;
  emessage: string;
}

class Error extends Block {
  constructor(props: IError) {
    super(props, { tagName: "div", className: "error-page" });
  }
  render() {
    return template(this.props);
  }
}

export { Error };
