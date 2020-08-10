import { Block } from "../../modules/Block";
import { MainFormLayout } from "../../layouts/MainForm";
import { Form } from "../../components/UI/Form";

import { ctx } from "./data";

type RegFieldsType = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
};

interface IRegPage {
  auth: (body: { phone: string } & RegFieldsType) => void;
}

export class RegPage extends Block<IRegPage> {
  componentDidMount(): void {
    const form = <HTMLFormElement>this.getContent().querySelector("#form");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      let object: RegFieldsType;
      new FormData(form).forEach((value, key) => {
        object[key] = value;
      });
      this.props.auth({
        ...object,
        phone: "+7945456545",
      });
    });
  }

  render(): HTMLElement {
    const Layout = new MainFormLayout();
    const LoginForm = new Form(ctx);
    Layout.getContent().querySelector("#main-form").appendChild(LoginForm.getContent());
    return Layout.getContent();
  }
}
