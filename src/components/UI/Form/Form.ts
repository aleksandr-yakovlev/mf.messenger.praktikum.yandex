import { Block } from "../../../modules/Block";
import { formValidity } from "./formValidity";
const template = require("./template.hbs");;
import "./styles.css";

export class Form extends Block {
  constructor(props: {
    label: string;
    submit: string;
    inputs: {
      name: string;
      type: string;
      size: string;
      required?: boolean;
      placeholder: string;
      pattern?: string;
    }[];
  }) {
    super(props, { tagName: "form", className: "form", id: "form" });
  }
  componentDidMount() {
    formValidity(this._element);
  }
  render() {
    return template(this.props);
  }
}
