import { Block } from "../../modules/Block";

import "./styles.css";

import * as template from "./template.hbs";

export class ProfileLayout extends Block {
  render(context = {}): string {
    return template(context);
  }
}
