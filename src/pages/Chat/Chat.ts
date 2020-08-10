import { Block } from "../../modules/Block";
import { ChatLayout } from "../../layouts/Chat";
import { Sidebar } from "../../components/Sidebar";
import { MessageList } from "../../components/MessageList";

import { sidebarCtx, messages } from "./data";

export class ChatPage extends Block {
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
