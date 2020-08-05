import { Block } from "./modules/Block";
import { ErrorPage } from "./pages/Error";
import { ChatPage } from "./pages/Chat";
import { LoginPage } from "./pages/Login";
import { RegPage } from "./pages/Reg";
import { ProfilePage } from "./pages/Profile";
import { Router } from "./modules/Router";
import "./styles.css";

const router = Router.getInstance("#root");

class Index extends Block {
  render() {
    const ul = document.createElement("ul");
    ul.classList.add("link");
    router.routes.forEach((route) => {
      const li = document.createElement("li");
      li.innerText = route._pathname;
      li.onclick = () => {
        router.go(route._pathname);
      };
      ul.appendChild(li);
    });
    return ul;
  }
}

router
  .use("/", Index)
  .use("#chat", ChatPage)
  .use("#login", LoginPage)
  .use("#reg", RegPage)
  .use("#profile", ProfilePage)
  .use("#error/404", ErrorPage, { ecode: 404 })
  .use("#error/500", ErrorPage, { ecode: 500 })
  .start();
