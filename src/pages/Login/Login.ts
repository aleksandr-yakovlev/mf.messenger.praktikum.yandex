import { Block } from "../../modules/Block";
import { MainFormLayout } from "../../layouts/MainForm";
import { Form } from "../../components/UI/Form";

const ctx = {
  label: "Авторизация",
  submit: "Авторизоваться",
  inputs: [
    {
      name: "uname",
      type: "text",
      size: "30",
      required: true,
      placeholder: "Логин",
      pattern: "^[a-zA-Z]+$",
    },
    {
      name: "lpwd",
      type: "password",
      size: "30",
      required: true,
      placeholder: "Пароль",
    },
  ],
};

export class LoginPage extends Block {
  render() {
    const Layout = new MainFormLayout();
    const LoginForm = new Form(ctx);
    Layout.getContent()
      .querySelector("#main-form")
      .appendChild(LoginForm.getContent());

    return Layout.getContent();
  }
}
