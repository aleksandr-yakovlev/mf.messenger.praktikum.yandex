import "./styles.css";

import { Login } from "./components/Login";
import { Reg } from "./components/Reg";
import { Profile } from "./components/Profile";
import { Chat } from "./components/Chat";
import { ErrorPage } from "./components/ErrorPage";

let items = [
  {
    title: "Авторизация",
    component: (root) => {
      Login.renderDOM(root);
    },
  },
  {
    title: "Регистрация",
    component: (root) => {
      Reg.renderDOM(root);
    },
  },
  {
    title: "Cписок чатов",
    component: (root) => {
      new Chat().renderDOM(root);
    },
  },
  {
    title: "Настройки пользователя",
    component: (root) => {
      new Profile().renderDOM(root);
    },
  },
  {
    title: "404",
    component: (root) => {
      new ErrorPage({
        ecode: 404,
        message: "Такой страницы нет",
      }).renderDOM(root);
    },
  },
  {
    title: "500",
    component: (root) => {
      new ErrorPage({
        ecode: 500,
        message: "Мы уже чиним",
      }).renderDOM(root);
    },
  },
];

let ul = document.createElement("ul");
ul.classList.add("link");
items.forEach((elem) => {
  let li = document.createElement("li");
  li.innerText = elem.title;
  li.onclick = () => {
    elem.component(document.getElementById("root"));
  };
  ul.appendChild(li);
});
document.getElementById("root").appendChild(ul);
