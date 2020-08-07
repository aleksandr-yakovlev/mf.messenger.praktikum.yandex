import { Block } from "../../modules/Block";
import { ChatLayout } from "../../layouts/Chat";
import { Sidebar } from "../../components/Sidebar";
import { MessageList } from "../../components/MessageList";

const sidebarCtx = {
  chats: [
    {
      id: "1",
      title: "Title",
      fname: "Who",
      text: "Long message very very very very very long long long long",
    },
    {
      id: "2",
      title: "Title",
      fname: "Who",
      text: "Long message very very very very very long long long long",
    },
    {
      id: "3",
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

export class ChatPage extends Block {
  componentDidMount(): void {
    console.log("!!!!!!");
    if (this.props.login) alert(this.props.login);
  }

  // componentDidUpdate(): void {
  //   console.log("!!!!!!");
  //   if (this.props.login) alert(this.props.login);
  // }

  render(): HTMLElement {
    const MsgList = new MessageList();
    const Sdbr = new Sidebar({
      chatHandler: (id, self) => () => {
        MsgList.setProps({ messages: messages[id] });
        self.setProps({ selected: id });
      },

      ...sidebarCtx,
    });
    const Layout = new ChatLayout({
      childrens: [
        {
          query: "#sidebar",
          block: Sdbr,
        },
        {
          query: "#main-content",
          block: MsgList,
        },
      ],
    });
    return Layout.getContent();
  }
}
