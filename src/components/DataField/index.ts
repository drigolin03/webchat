import Block from "../../utils/Block";
import template from "./dataField.pug";
import "./styles.css";

interface DataFieldProps {
  label: string;
  idInput?: string;
  type?: string;
  events?: {
    click: () => void;
  };
  classes?: string;
  name?: string | Block;
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
      label: this.props.label,
      idInput: this.props.idInput,
      type: this.props.type,
      name: this.props.name,
      value: this.props.value,
    });
  }
}
