import { AppComponent } from "../AppComponent";
import { Form } from "../UI/Form";
import template from "./template.hbs";
import "./styles.css";

const FormPage = new Form();

export class MainForm extends AppComponent {
  componentDidMount() {
    FormPage.componentDidMount();
  }
  render(context) {
    return template({
      form: FormPage.render(context),
    });
  }
}
