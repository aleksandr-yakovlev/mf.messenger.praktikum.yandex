module.exports = function (req, res) {
  res.render("mainform", {
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
    link: {
      url: "../reg",
      label: "Нет аккаунта?",
    },
  });
};
