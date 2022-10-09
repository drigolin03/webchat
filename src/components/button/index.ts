import Block from "../../utils/Block";
import template from "./button.pug";
import "./styles.css";

interface ButtonProps {
  label: string;
  events?: {
    click: () => void;
  };
  classes?: string;
  url?: string;
  type?: "button" | "submit";
}

export class Button extends Block {
  constructor(props: ButtonProps) {
    if (props.url === undefined) {
      props.url = "";
    }

    super(props);
  }

  render() {
    return this.compile(template, { ...this.props });
  }
}
