import { MainForm } from "../MainForm";

const cntx = {
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

const Login = new MainForm(cntx);

export { Login };
