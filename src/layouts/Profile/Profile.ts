import { Block } from "../../modules/Block";

import "./styles.css";

const template = require("./template.hbs");

export class ProfileLayout extends Block {
  render(context = {}) {
    return template(context);
  }
}
