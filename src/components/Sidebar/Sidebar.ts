import { Block } from "../../modules/Block";

import "./styles.css";

import * as template from "./template.hbs";

interface ISidebar {
  chats?: Record<string,unknown>[];
  selected?: string;
  chatHandler?: (id: string, self:Sidebar) => () => void;
}

const setChatHandler = (chatHandler: (id: string,self:Sidebar) => () => void , self:Sidebar) => {
  const elements = self.getContent().getElementsByClassName("main-chat-card");
  for (let i = 0; i < elements.length; i+=1) {
   (<HTMLElement>elements[i]).addEventListener("click", chatHandler(elements[i].id,self));
  }
}

class Sidebar extends Block {
  constructor(props?: ISidebar) {
    super(props, { tagName: "aside", className: "main-sidebar" });
  }

  componentDidMount():void {
    const { chatHandler } = this.props;
    if (chatHandler) {
      setChatHandler(chatHandler,this)
    }
  }

  componentDidUpdate():void {
    const { chatHandler } = this.props;
    if (chatHandler) {
      setChatHandler(chatHandler,this)
    }
  }

  render():string {
    const { chats, selected } = this.props;
    return template({ chats,selected });
  }
}

export { Sidebar };
