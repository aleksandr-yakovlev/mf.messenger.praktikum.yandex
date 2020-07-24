import { Block } from "../../modules/Block";
const template = require("./template.hbs");;
import "./styles.css";

class ChatLayout extends Block {
  constructor(props?) {
    super(props, { tagName: "div", className: "chat" });
  }
  render() {
    return template(this.props);
  }
}

export { ChatLayout };
