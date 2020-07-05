import template from "./template.hbs";
import "./styles.css";

class Sidebar {
  componentDidMount() {
    let elements = document.getElementsByClassName("main-chat-card");
    for (var i = 0; i < elements.length; i++) {
      (function (index) {
        elements[index].addEventListener("click", function () {
          window.location.href = `/chat/${this.id}`;
        });
      })(i);
    }
  }
  render(context) {
    return template(context);
  }
}

export { Sidebar };
