import { Block } from "../../modules/Block";
import { MainFormLayout } from "../../layouts/MainForm";
import { Form } from "../../components/UI/Form";

import { ctx } from "./data";

export class RegPage extends Block {
  componentDidMount(): void {
    const form = <HTMLFormElement>this.getContent().querySelector("#form");
    form.addEventListener("submit", async (e) => {
      e.preventDefault();
      const object = {};
      new FormData(form).forEach((value, key) => {
        object[key] = value;
      });
      await this.props.auth({
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
