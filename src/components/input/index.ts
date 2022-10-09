import Block from "../../utils/Block";
import { ValidationSettings } from "../../utils/Validation";
import { ErrorMessage } from "../ErrorMessage";
import { InputField } from "../InputField";
import template from "./input.pug";
import "./styles.css";

interface InputProps {
  label: string;
  idInput?: string;
  type?: string;
  events?: {
    click?: () => void;
    focusin?: () => void;
    focusout?: (env: Event) => void;
  };
  classes?: string[];
  inputClasses?: string;
  valueInput?: string;
  errorMessage?: string;
  errorInput?: string;
  RegExp?: any;
  RegInput?: any;
  placeholderInput?: string;
}

export class Input extends Block {
  constructor(props: InputProps) {
    super(props);
  }

  init() {
    this.children.errorMessage = new ErrorMessage({
      errorMessage: "",
    });
    this.children.inputField = new InputField({
      idInput: this.props.idInput,
      name: this.props.idInput,
      type: this.props.type,
      classes: this.props.inputClasses,
      valueInput: this.props.valueInput,
      placeholderInput: this.props.placeholderInput,
      onBlur: (env: FocusEvent) => {
        const val = (env.target as HTMLInputElement).value;
        const valId = (env.target as HTMLInputElement).id;
        this.onValidate(val, valId);
      },
    });
  }

  protected onValidate(val: string, valId: string) {
    if (val === undefined) {
      val = this.children.inputField.props.valueInput;
    }

    const validationSettings = ValidationSettings(valId);
    const regIn = new RegExp(validationSettings[1], "i");
    const isValid = regIn.test(val);
    const inputClasses = this.children.inputField.props.classes;
    const arrClasses = inputClasses.split(" ");
    if (!isValid) {
      this.children.errorMessage.setProps({
        errorMessage: validationSettings[0],
      });
      if (!(arrClasses.indexOf("field__input_error") > 0)) {
        this.children.inputField.setProps({
          classes: inputClasses.push(" field__input_error"),
          valueInput: val,
        });
      } else {
        this.children.inputField.setProps({
          classes: inputClasses,
          valueInput: val,
        });
      }
    } else {
      this.children.errorMessage.setProps({ errorMessage: "" });
      const strClasses = arrClasses
        .filter((val) => val != "field__input_error")
        .join(" ");
      this.children.inputField.setProps({
        classes: strClasses,
        valueInput: val,
      });
    }

    return isValid;
  }

  render() {
    return this.compile(template, {
      label: this.props.label,
      idInput: this.props.idInput,
    });
  }
}
