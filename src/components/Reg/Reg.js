import { MainForm } from "../MainForm";

const cntx = {
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
      pattern:
        "^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8,}$",
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

const Reg = new MainForm(cntx);

export { Reg };
