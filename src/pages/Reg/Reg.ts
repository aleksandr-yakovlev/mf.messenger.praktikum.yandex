import { Block } from "../../modules/Block";
import { MainFormLayout } from "../../layouts/MainForm";
import { Form } from "../../components/UI/Form";
import { HTTP, METHODS } from "../../utils/request";
import { BASE_URL } from "../../consts";

const req = new HTTP();

const res = req.request(`${BASE_URL}/auth/signup`, {
  method: METHODS.POST,
});

res.then((value) => console.log(value));
const ctx = {
  label: "Регистрация",
  submit: "Зарегистрироваться",
  inputs: [
    {
      name: "email",
      type: "email",
      size: "30",
      required: true,
      placeholder: "Почта",
    },
    {
      name: "uname",
      type: "text",
      size: "30",
      required: true,
      placeholder: "Логин",
      pattern: "^[a-zA-Z]+$",
    },
    {
      name: "pwd",
      type: "password",
      size: "30",
      required: true,
      placeholder: "Пароль",
      pattern: "^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$",
    },
    {
      name: "confirm_pwd",
      type: "password",
      size: "30",
      required: true,
      placeholder: "Пароль еще раз",
    },
  ],
};

export class RegPage extends Block {
  render(): HTMLElement {
    const Layout = new MainFormLayout();
    const LoginForm = new Form(ctx);
    Layout.getContent().querySelector("#main-form").appendChild(LoginForm.getContent());
    return Layout.getContent();
  }
}
