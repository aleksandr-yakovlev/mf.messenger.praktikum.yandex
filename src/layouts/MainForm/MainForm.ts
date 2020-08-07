import { Block } from "../../modules/Block";

import "./styles.css";

import * as template from "./template.hbs";

export class MainFormLayout extends Block {
  render(): string {
    return template(this.props);
  }
}
