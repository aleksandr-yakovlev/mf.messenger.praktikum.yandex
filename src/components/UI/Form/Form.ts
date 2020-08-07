import { Block } from "../../../modules/Block";
import { formValidity } from "./formValidity";

import "./styles.css";

import * as template from "./template.hbs";

type InputType = {
  name: string;
  type: string;
  size: string;
  required?: boolean;
  placeholder: string;
  pattern?: string;
};
interface IForm {
  label: string;
  submit: string;
  inputs: InputType[];
}

export class Form extends Block {
  constructor(props: IForm) {
    super(props, { tagName: "form", className: "form", id: "form" });
  }

  componentDidMount():void {
    formValidity(this._element);
  }

  render():string {
    return template(this.props);
  }
}
