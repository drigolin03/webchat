import Block from "../../utils/Block";
import template from "./inputField.pug";
import "./styles.css";
interface InputFieldProps {
  errorMsg?: string;
  idInput?: string;
  type?: string;
  events?: {
    click?: () => void;
    focusin?: () => void;
    focusout?: (env: Event) => void;
  };
  classes?: string;
  inputClasses?: string;
  valueInput?: string;
  errorInput?: string;
  placeholderInput?: string;
  RegExp?: any;
  RegInput?: any;
  name?: string;
  onBlur?: (env: FocusEvent) => void;
}

export class InputField extends Block {
  constructor(props: InputFieldProps) {
    super(props);
    this.props.events = {
      blur: this.props.onBlur,
    };
  }

  render() {
    return this.compile(template, {
      idInput: this.props.idInput,
      type: this.props.type,
      classes: this.props.inputClasses,
      valueInput: this.props.valueInput,
      errorMsg: this.props.errorMsg,
      placeholderInput: this.props.placeholderInput,
    });
  }
}
