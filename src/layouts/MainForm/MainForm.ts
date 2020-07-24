import { Block } from "../../modules/Block";
const template = require("./template.hbs");;
import "./styles.css";

export class MainFormLayout extends Block {
  render() {
    return template(this.props);
  }
}
