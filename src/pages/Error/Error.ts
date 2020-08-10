import { Block } from "../../modules/Block";
import { Error } from "../../components/Error";

interface IErrorPage {
  ecode: number;
}

export class ErrorPage extends Block<IErrorPage> {
  constructor(props = { ecode: 500 }) {
    super(props);
  }

  render(): HTMLElement {
    const code = {
      404: {
        message: "Такой страницы нет",
      },
      500: {
        message: "Мы уже чиним",
      },
    };
    const { ecode } = this.props;
    return new Error({
      ecode,
      emessage: code[ecode].message,
    }).getContent();
  }
}
