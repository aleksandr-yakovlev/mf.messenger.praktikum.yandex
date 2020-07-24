import { Block } from "../../modules/Block";
const template = require("./template.hbs");;
import "./styles.css";

export class ProfileLayout extends Block {
  render(context = {}) {
    return template(context);
  }
}
