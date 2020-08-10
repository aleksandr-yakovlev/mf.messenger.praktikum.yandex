import { Block } from "../../modules/Block";

import "./styles.css";

import * as template from "./template.hbs";

interface IMessageList {
  messages: {
    uname: string;
    text: string;
    timestamp: string;
  };
}

class MessageList extends Block<IMessageList> {
  constructor(props?: IMessageList) {
    super(props, { tagName: "div", className: "message-list" });
  }

  componentDidMount(): void {
    this.getContent()
      .querySelector("#message-text")
      .addEventListener("keypress", (e: KeyboardEvent) => {
        const target = <HTMLInputElement>e.target;
        if (e.which === 13 && !e.shiftKey && target.value.trim()) {
          if (/<script>/.test(target.value)) {
            alert("Сообщение не может содержать «<script>»");
          } else {
            console.log(target.value);
            target.value = "";
          }
          e.preventDefault();
        }
      });
  }

  render(): string {
    return template(this.props);
  }
}

export { MessageList };
