import Block from "../../utils/Block";
import template from "./dataField.pug";
import "./styles.css";

interface DataFieldProps {
  events?: {
    click: () => void;
  };
  classes?: string;
  name?: string;
  value?: string;
  fieldName?: Block;
  fieldValue?: Block;
}

export class DataField extends Block {
  constructor(props: DataFieldProps) {
    super(props);
  }

  render() {
    return this.compile(template, {
      name: this.props.name,
      value: this.props.value,
    });
  }
}
