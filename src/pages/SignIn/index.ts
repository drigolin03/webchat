import Block from "../../utils/Block";
import template from "./sign-in.pug";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import Validator, {
  ValidationType,
  ErrorMessages,
} from "../../utils/Validation";
import "./styles.css";

interface SignInProps {
  title: string;
  classes?: string[];
  url?: string;
  children?: {
    fields: Block[];
    footer: Block[];
  };
}

const validator = (currentField: any, type: ValidationType, value: any) => {
  currentField.style.display = Validator.validate(type, value)
    ? "none"
    : "block";
};

export class SignIn extends Block {
  constructor(props: SignInProps) {
    super(props);
  }

  init() {
    const fields = [
      new Input({
        className: "login",
        label: "Логин",
        id: "login",
        type: ValidationType.Login,
        errorMessage: ErrorMessages.Login_error,
        events: {
          focusout: (event) => {
            const currentField = this.children.fields[0]._element.children[2];
            console.log(event.target.value);
            return validator(
              currentField,
              ValidationType.Login,
              event.target.value
            );
          },
        },
      }),
      new Input({
        className: "password",
        label: "Пароль",
        id: "password",
        errorMessage: ErrorMessages.Password_error,
        events: {
          focusout: (event) => {
            const currentField = this.children.fields[1]._element.children[2];
            console.log(event.target.value);
            return validator(
              currentField,
              ValidationType.Password,
              event.target.value
            );
          },
        },
      }),
    ];
    this.children.fields = fields;

    const buttons = [
      new Button({
        label: "Войти",
        url: "",
        classes: "button main-button",
        type: "submit",
      }),
    ];
    this.children.actions = buttons;
  }
  render() {
    return this.compile(template, { title: this.props.title });
  }
}
