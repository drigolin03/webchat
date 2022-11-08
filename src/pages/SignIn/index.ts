import Block from "../../utils/Block";
import template from "./sign-in.pug";
<<<<<<< HEAD
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { INPUT_ERROR } from "../../components/input";
=======
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Link } from "../../components/Link";
import Validator, {
  ValidationType,
  ErrorMessages,
} from "../../utils/Validation";
import { SigninData } from "../../api/AuthAPI";
import AuthController from "../../controllers/AuthController";
>>>>>>> origin/sprint_3
import "./styles.css";

interface SignInProps {
  title: string;
  classes?: string[];
  url?: string;
  children?: {
    fields: Block[];
<<<<<<< HEAD
    footer: Block[];
  };
}

=======
    actions: Block[];
  };
}

const validator = (currentField: any, type: ValidationType, value: any) => {
  currentField.style.display = Validator.validate(type, value)
    ? "none"
    : "block";
};

>>>>>>> origin/sprint_3
export class SignIn extends Block {
  constructor(props: SignInProps) {
    super(props);
  }

<<<<<<< HEAD
  init() {
    const fields = [
      new Input({
        label: "Логин",
        idInput: "login",
        type: "text",
        classes: ["field"],
        inputClasses: "input",
        events: {
          focusin: () => {
            const loginL = document.querySelector(
              `#${this.children.fields[0].props.idInput}`
            );
            loginL?.classList.remove(INPUT_ERROR);
=======
  protected init() {
    const fields = [
      new Input({
        className: "login",
        label: "Логин",
        id: "login",
        type: "login",
        errorMessage: ErrorMessages.Login_error,
        events: {
          focusout: (event) => {
            const currentField = this.children.fields[0]._element.children[2];
            return validator(currentField, "login", event.target.value);
>>>>>>> origin/sprint_3
          },
        },
      }),
      new Input({
<<<<<<< HEAD
        label: "Пароль",
        idInput: "password",
        type: "password",
        classes: ["field"],
        inputClasses: "input",
        events: {
          focusin: () => {
            const loginL = document.querySelector(
              `#${this.children.fields[1].props.idInput}`
            );
            loginL?.classList.remove(INPUT_ERROR);
=======
        className: "password",
        label: "Пароль",
        type: "password",
        id: "password",
        errorMessage: ErrorMessages.Password_error,
        events: {
          focusout: (event: MouseEvent) => {
            const currentField = this.children.fields[1]._element.children[2];
            return validator(currentField, "password", event.target.value);
>>>>>>> origin/sprint_3
          },
        },
      }),
    ];
    this.children.fields = fields;

    const buttons = [
      new Button({
        label: "Войти",
<<<<<<< HEAD
        events: {
          click: () => {
            event.preventDefault();
            const valid = this.children.fields.reduce((acc, val) => {
              const result = val.onValidate();
              return acc && result;
            }, true);
            const logLog = document.querySelector(
              `#${this.children.fields[0].props.idInput}`
            )!.value;
            const logPass = document.querySelector(
              `#${this.children.fields[1].props.idInput}`
            )!.value;
            if (valid) {
              console.log({ login: logLog, password: logPass });
            }
          },
        },
        url: "",
        classes: "button main-button",
        type: "submit",
      }),
    ];
    this.children.actions = buttons;
  }

  render() {
    return this.compile(template, { title: this.props.title });
=======
        classes: "button main-button",
        events: {
          click: () => this.onSubmit(),
        },
      }),
      new Link({
        title: "Нет аккаунта?",
        to: "/registration",
      }),
    ];

    this.children.actions = buttons;
  }
  onSubmit() {
    const values = Object.values(this.children.fields)
      .filter((child) => child instanceof Input)
      .map((child) => [
        child._element.childNodes[1].name,
        child._element.childNodes[1].value,
      ]);

    const data = Object.fromEntries(values);

    AuthController.signin(data as SigninData);
  }
  render(): DocumentFragment {
    return this.compile(template, { title: "Вход" });
>>>>>>> origin/sprint_3
  }
}
