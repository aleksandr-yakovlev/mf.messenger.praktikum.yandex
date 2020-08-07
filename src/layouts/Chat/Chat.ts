import { Block } from "../../modules/Block";

import "./styles.css";

import * as template from "./template.hbs";

class ChatLayout extends Block {
  constructor(props?:Record<string,unknown>) {
    super(props, { tagName: "div", className: "chat" });
  }
  
  render():string {
    return template(this.props);
  }
}

export { ChatLayout };
