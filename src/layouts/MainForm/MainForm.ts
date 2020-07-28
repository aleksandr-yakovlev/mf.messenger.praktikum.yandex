import { Block } from "../../modules/Block";

import "./styles.css";

const template = require("./template.hbs");

export class MainFormLayout extends Block {
  render() {
    return template(this.props);
  }
}
