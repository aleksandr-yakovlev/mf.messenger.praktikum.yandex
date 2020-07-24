import { Block } from "../../modules/Block";
const template = require("./template.hbs");
import "./styles.css";

class Error extends Block {
  constructor(props: { ecode: number; emessage: string }) {
    super(props, { tagName: "div", className: "error-page" });
  }
  render() {
    return template(this.props);
  }
}

export { Error };
