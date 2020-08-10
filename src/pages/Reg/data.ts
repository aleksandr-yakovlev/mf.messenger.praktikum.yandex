export const ctx = {
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