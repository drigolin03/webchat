import Block from "../../utils/Block";
import template from "./input.pug";
import "./styles.css";
import { ValidationType } from "../../utils/Validation";

interface InputProps {
  id: string;
  type?: ValidationType | string;
  label?: string;
  className?: string;
  errorMessage?: string;
  events?: any;
  valueInput?: string;
}

export class Input extends Block {
  constructor(props: InputProps) {
    super(props);
  }

  render() {
    return this.compile(template, this.props);
  }
}
