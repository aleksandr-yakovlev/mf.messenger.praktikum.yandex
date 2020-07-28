import { Block } from "../../../modules/Block";
import { formValidity } from "./formValidity";

import "./styles.css";

const template = require("./template.hbs");

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
  componentDidMount() {
    formValidity(this._element);
  }
  render() {
    return template(this.props);
  }
}
