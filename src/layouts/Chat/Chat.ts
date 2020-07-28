import { Block } from "../../modules/Block";

import "./styles.css";

const template = require("./template.hbs");

class ChatLayout extends Block {
  constructor(props?) {
    super(props, { tagName: "div", className: "chat" });
  }
  render() {
    return template(this.props);
  }
}

export { ChatLayout };
