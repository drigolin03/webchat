import Block from "../../utils/Block";
import template from "./signUp.pug";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import Validator, {
  ValidationType,
  ErrorMessages,
} from "../../utils/Validation";
import "./styles.css";

interface SignUpProps {
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

export class SignUp extends Block {
  constructor(props: SignUpProps) {
    super(props);
  }

  init() {
    const fields = [
      new Input({
        className: "field",
        label: "Почта",
        id: "email",
        type: ValidationType.Email,
        errorMessage: ErrorMessages.Email_error,
        events: {
          focusout: (event) => {
            const currentField = this.children.fields[0]._element.children[2];
            console.log(event.target.value);
            return validator(
              currentField,
              ValidationType.Email,
              event.target.value
            );
          },
        },
      }),
      new Input({
        className: "field",
        label: "Логин",
        id: "login",
        type: ValidationType.Login,
        errorMessage: ErrorMessages.Login_error,
        events: {
          focusout: (event) => {
            const currentField = this.children.fields[1]._element.children[2];
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
        className: "field",
        label: "Имя",
        id: "first_name",
        type: ValidationType.Name,
        errorMessage: ErrorMessages.Name_error,
        events: {
          focusout: (event) => {
            const currentField = this.children.fields[2]._element.children[2];
            console.log(event.target.value);
            return validator(
              currentField,
              ValidationType.Name,
              event.target.value
            );
          },
        },
      }),
      new Input({
        className: "field",
        label: "Фамилия",
        id: "second_name",
        type: ValidationType.Name,
        errorMessage: ErrorMessages.Name_error,
        events: {
          focusout: (event) => {
            const currentField = this.children.fields[3]._element.children[2];
            console.log(event.target.value);
            return validator(
              currentField,
              ValidationType.Name,
              event.target.value
            );
          },
        },
      }),
      new Input({
        className: "field",
        label: "Телефон",
        id: "phone",
        type: ValidationType.Phone,
        errorMessage: ErrorMessages.Phone_error,
        events: {
          focusout: (event) => {
            const currentField = this.children.fields[4]._element.children[2];
            console.log(event.target.value);
            return validator(
              currentField,
              ValidationType.Phone,
              event.target.value
            );
          },
        },
      }),
      new Input({
        className: "field",
        label: "Пароль",
        id: "password",
        type: ValidationType.Password,
        errorMessage: ErrorMessages.Password_error,
        events: {
          focusout: (event) => {
            const currentField = this.children.fields[5]._element.children[2];
            console.log(event.target.value);
            return validator(
              currentField,
              ValidationType.Password,
              event.target.value
            );
          },
        },
      }),
      new Input({
        className: "field",
        label: "Пароль (ещё раз)",
        id: "phone",
        type: ValidationType.Password,
        errorMessage: ErrorMessages.Password_error,
        events: {
          focusout: (event) => {
            const currentField = this.children.fields[6]._element.children[2];
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
        label: "Зарегистрироваться",
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
