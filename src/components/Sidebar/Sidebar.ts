import { Block } from "../../modules/Block";

import "./styles.css";

const template = require("./template.hbs");

interface ISidebar {
  chats?: {}[];
  chatHandler?: (id: string) => void;
}

class Sidebar extends Block {
  constructor(props?: ISidebar) {
    super(props, { tagName: "aside", className: "main-sidebar" });
  }
  componentDidMount() {
    const { chatHandler } = this.props;
    if (chatHandler) {
      let elements = this.getContent().getElementsByClassName("main-chat-card");
      for (let i = 0; i < elements.length; i++) {
        elements[i].addEventListener("click", chatHandler(elements[i].id));
      }
    }
  }
  render() {
    const { chats } = this.props;
    return template({ chats });
  }
}

export { Sidebar };
