import { Block } from "../../modules/Block";
const template = require("./template.hbs");;
import "./styles.css";

class MessageList extends Block {
  constructor(props?) {
    super(props, { tagName: "div", className: "message-list" });
  }
  componentDidMount() {
    this.getContent()
      .querySelector("#message-text")
      .addEventListener("keypress", function (e: KeyboardEvent) {
        let target = <HTMLInputElement>e.target;
        if (e.which == 13 && !e.shiftKey && target.value.trim()) {
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
  render() {
    return template(this.props);
  }
}

export { MessageList };
