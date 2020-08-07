import { Block } from "../../modules/Block";
import { MainFormLayout } from "../../layouts/MainForm";
import { Form } from "../../components/UI/Form";

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
      name: "login",
      type: "text",
      size: "30",
      required: true,
      placeholder: "Логин",
      pattern: "^[a-zA-Z]+$",
    },
    {
      name: "first_name",
      type: "text",
      size: "30",
      required: true,
      placeholder: "Имя",
      pattern: "^[а-яА-Я]+$",
    },
    {
      name: "second_name",
      type: "text",
      size: "30",
      required: true,
      placeholder: "Фамилия",
      pattern: "^[а-яА-Я]+$",
    },
    {
      name: "password",
      type: "password",
      size: "30",
      required: true,
      placeholder: "Пароль",
      pattern: "^[a-zA-Z]+$",
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
