import template from "./template.hbs";
import { AppComponent } from "../AppComponent";
import "./styles.css";

class ErrorPage extends AppComponent {
  render(context) {
    return template(context);
  }
}

export { ErrorPage };
