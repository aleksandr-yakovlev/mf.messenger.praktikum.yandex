import { AppComponent } from "../AppComponent";
import template from "./template.hbs";
import { Sidebar } from "../Sidebar";
import { MessageList } from "../MessageList";
import "./styles.css";

const sidebarCntx = {
  chats: [
    {
      id: 1,
      title: "Title",
      fname: "Who",
      text: "Long message very very very very very long long long long",
    },
    {
      id: 2,
      title: "Title",
      fname: "Who",
      text: "Long message very very very very very long long long long",
    },
    {
      id: 3,
      title: "Title",
      fname: "Who",
      text: "Long message very very very very very long long long long",
    },
  ],
};

const messages = {
  1: [
    {
      uname: "User1",
      text: "Long message very very very very very long long long long",
      timestamp: "2019-01-01",
    },
    {
      uname: "User1",
      text: "Long message very very very very very long long long long",
      timestamp: "2019-01-01",
    },
    {
      uname: "User2",
      text: "Long message very very very very very long long long long",
      timestamp: "2019-01-03",
    },
  ],
  2: [
    {
      uname: "User43",
      text: "Message 0",
      timestamp: "2019-01-01",
    },
    {
      uname: "User23",
      text: "Message 1",
      timestamp: "2019-01-01",
    },
    {
      uname: "User2",
      text: "Long message very very very very very long long long long",
      timestamp: "2019-01-03",
    },
  ],
  3: [
    {
      uname: "User3",
      text: "Long message",
      timestamp: "2019-01-01",
    },
    {
      uname: "User4",
      text: "Short Message",
      timestamp: "2019-01-01",
    },
  ],
};

const ChatSidebar = new Sidebar();

const cntx = {
  sidebar: ChatSidebar.render(sidebarCntx),
};

class Chat extends AppComponent {
  componentDidMount() {
    let elements = document.getElementsByClassName("main-chat-card");
    for (var i = 0; i < elements.length; i++) {
      (function (index) {
        elements[index].addEventListener("click", function () {
          let Message = new MessageList({
            messages: messages[this.id],
          });
          Message.renderDOM(document.getElementById("main-content"));
        });
      })(i);
    }
  }
  render() {
    return template(cntx);
  }
}

export { Chat };
