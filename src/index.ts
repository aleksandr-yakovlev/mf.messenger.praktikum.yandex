import { Block } from "./modules/Block";
import { ErrorPage } from "./pages/Error";
import { ChatPage } from "./pages/Chat";
import { LoginPage } from "./pages/Login";
import { RegPage } from "./pages/Reg";
import { ProfilePage } from "./pages/Profile";
import { Router } from "./modules/Router";
import "./styles.css";
// function render(query, block) {
//   const root = document.querySelector(query);
//   root.appendChild(block.getContent());
//   return root;
// }

// function render(query, block) {
//   const root = document.querySelector(query);
//   root.appendChild(block.getContent());
//   return root;
// }

//render("#root", Login);

//render("#root", new ProfilePage());

// const errorPage = new Error({
//   ecode: 404,
//   message: "Такой страницы нет",
// });
// // app — это id дива в корне DOM
// render("#root", errorPage);

// import "./styles.css";

// import { Login } from "./components/Login";
// import { Reg } from "./components/Reg";
// import { Profile } from "./components/Profile";
// import { Chat } from "./components/Chat";
//

// let items = [
//   {
//     title: "Авторизация",
//     component: (root) => {
//       Login.renderDOM(root);
//     },
//   },
//   {
//     title: "Регистрация",
//     component: (root) => {
//       Reg.renderDOM(root);
//     },
//   },
//   {
//     title: "Cписок чатов",
//     component: (root) => {
//       new Chat().renderDOM(root);
//     },
//   },
//   {
//     title: "Настройки пользователя",
//     component: (root) => {
//       new Profile().renderDOM(root);
//     },
//   },
//   {
//     title: "404",
//     component: (root) => {
//       new ErrorPage({
//
//       }).renderDOM(root);
//     },
//   },
//   {
//     title: "500",
//     component: (root) => {
//       new ErrorPage({
//
//       }).renderDOM(root);
//     },
//   },
// ];
class Index extends Block {
  constructor() {
    super();
  }
  render() {
    let ul = document.createElement("ul");
    ul.classList.add("link");
    router.routes.forEach((route) => {
      let li = document.createElement("li");
      li.innerText = route._pathname;
      li.onclick = () => {
        router.go(route._pathname);
      };
      ul.appendChild(li);
    });
    return ul;
  }
}

const router = new Router("#root");

router
  .use("/", Index)
  .use("#chat", ChatPage)
  .use("#login", LoginPage)
  .use("#reg", RegPage)
  .use("#profile", ProfilePage)
  .use("#error/404", ErrorPage, { ecode: 404 })
  .use("#error/500", ErrorPage, { ecode: 500 })
  .start();
