import { Block } from "./modules/Block";
import { ErrorPage } from "./pages/Error";
import { ChatPage } from "./pages/Chat";
import { LoginPage } from "./pages/Login";
import { RegPage } from "./pages/Reg";
import { ProfilePage } from "./pages/Profile";
import { Router } from "./modules/Router";
import { HTTP } from "./utils/request";
import { BASE_URL } from "./consts";
import "./styles.css";

const router = Router.getInstance("#root");

let state = {
  login: "login1",
};

const auth = async (body: {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}): Promise<void> => {
  try {
    const res = await new HTTP().post(`${BASE_URL}/auth/signup`, body);
    if (res.status === 200) {
      state = { ...state, login: body.login };
      if (router.getRoute("#chat")) {
        router.getRoute("#chat").setProps({ login: state.login });
      }
      router.go("#chat");
    } else {
      alert(res.status);
    }
  } catch {
    router.go("#error/500");
  }
};

class Index extends Block {
  render() {
    const ul = document.createElement("ul");
    ul.classList.add("link");
    router.routes.forEach((route) => {
      const li = document.createElement("li");
      li.textContent = route._pathname;
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
  .use("#chat", ChatPage, { login: state.login })
  .use("#login", LoginPage)
  .use("#reg", RegPage, { auth })
  .use("#profile", ProfilePage)
  .use("#error/404", ErrorPage, { ecode: 404 })
  .use("#error/500", ErrorPage, { ecode: 500 })
  .start();
