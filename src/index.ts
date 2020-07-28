import { Block } from "./modules/Block";
import { ErrorPage } from "./pages/Error";
import { ChatPage } from "./pages/Chat";
import { LoginPage } from "./pages/Login";
import { RegPage } from "./pages/Reg";
import { ProfilePage } from "./pages/Profile";
import { Router } from "./modules/Router";
import "./styles.css";

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

const router = Router.getInstance("#root");

router
  .use("/", Index)
  .use("#chat", ChatPage)
  .use("#login", LoginPage)
  .use("#reg", RegPage)
  .use("#profile", ProfilePage)
  .use("#error/404", ErrorPage, { ecode: 404 })
  .use("#error/500", ErrorPage, { ecode: 500 })
  .start();
