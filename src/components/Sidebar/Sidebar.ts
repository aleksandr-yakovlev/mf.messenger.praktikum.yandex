import { Block } from "../../modules/Block";
const template = require("./template.hbs");
import "./styles.css";

class Sidebar extends Block {
  constructor(props?: { chats?: {}[]; chatHandler?: (id: string) => void }) {
    super(props, { tagName: "aside", className: "main-sidebar" });
  }
  componentDidMount() {
    const { chatHandler } = this.props;
    if (chatHandler) {
      let elements = this.getContent().getElementsByClassName("main-chat-card");
      for (var i = 0; i < elements.length; i++) {
        (function (index) {
          elements[index].addEventListener(
            "click",
            chatHandler(elements[index].id)
          );
        })(i);
      }
    }
  }
  render() {
    const { chats } = this.props;
    return template({ chats });
  }
}

export { Sidebar };
