import { AppComponent } from "../../AppComponent";
import { formValidity } from "./formValidity";
import template from "./template.hbs";
import "./styles.css";

export class Form extends AppComponent {
  componentDidMount() {
    formValidity();
  }
  render(context) {
    return template(context);
  }
}
