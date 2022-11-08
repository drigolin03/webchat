import Block from "../../utils/Block";
import template from "./signUp.pug";
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
import { SignupData } from "../../api/AuthAPI";
import AuthController from "../../controllers/AuthController";
>>>>>>> origin/sprint_3
import "./styles.css";

interface SignUpProps {
  title: string;
  classes?: string[];
<<<<<<< HEAD
  url?: string;
  children?: {
    fields: Block[];
    footer: Block[];
  };
}

=======
}

const validator = (currentField: any, type: ValidationType, value: any) => {
  currentField.style.display = Validator.validate(type, value)
    ? "none"
    : "block";
};

>>>>>>> origin/sprint_3
export class SignUp extends Block {
  constructor(props: SignUpProps) {
    super(props);
  }

  init() {
    const fields = [
      new Input({
<<<<<<< HEAD
        label: "Почта",
        idInput: "email",
        type: "text",
        classes: ["field"],
        inputClasses: "input",
        events: {
          click() {},
          focusin: () => {
            const loginL = document.querySelector(
              `#${this.children.fields[0].props.idInput}`
            );
            loginL?.classList.remove(INPUT_ERROR);
=======
        className: "field",
        label: "Почта",
        id: "email",
        type: "email",
        errorMessage: ErrorMessages.Email_error,
        events: {
          focusout: (event) => {
            const currentField = this.children.fields[0]._element.children[2];
            return validator(currentField, "email", event.target.value);
>>>>>>> origin/sprint_3
          },
        },
      }),
      new Input({
<<<<<<< HEAD
        label: "Логин",
        idInput: "login",
        type: "text",
        classes: ["field"],
        inputClasses: "input",
        events: {
          focusin: () => {
            const loginL = document.querySelector(
              `#${this.children.fields[1].props.idInput}`
            );
            loginL?.classList.remove(INPUT_ERROR);
=======
        className: "field",
        label: "Логин",
        id: "login",
        type: "login",
        errorMessage: ErrorMessages.Login_error,
        events: {
          focusout: (event) => {
            const currentField = this.children.fields[1]._element.children[2];
            return validator(currentField, "login", event.target.value);
>>>>>>> origin/sprint_3
          },
        },
      }),
      new Input({
<<<<<<< HEAD
        label: "Имя",
        idInput: "first_name",
        type: "text",
        classes: ["field"],
        inputClasses: "input",
        events: {
          focusin: () => {
            const loginL = document.querySelector(
              `#${this.children.fields[2].props.idInput}`
            );
            loginL?.classList.remove(INPUT_ERROR);
=======
        className: "field",
        label: "Имя",
        id: "first_name",
        type: "name",
        errorMessage: ErrorMessages.Name_error,
        events: {
          focusout: (event) => {
            const currentField = this.children.fields[2]._element.children[2];
            return validator(currentField, "name", event.target.value);
>>>>>>> origin/sprint_3
          },
        },
      }),
      new Input({
<<<<<<< HEAD
        label: "Фамилия",
        idInput: "second_name",
        type: "text",
        classes: ["field"],
        inputClasses: "input",
        events: {
          focusin: () => {
            const loginL = document.querySelector(
              `#${this.children.fields[3].props.idInput}`
            );
            loginL?.classList.remove(INPUT_ERROR);
=======
        className: "field",
        label: "Фамилия",
        id: "second_name",
        type: "name",
        errorMessage: ErrorMessages.Name_error,
        events: {
          focusout: (event) => {
            const currentField = this.children.fields[3]._element.children[2];
            return validator(currentField, "name", event.target.value);
>>>>>>> origin/sprint_3
          },
        },
      }),
      new Input({
<<<<<<< HEAD
        label: "Телефон",
        idInput: "phone",
        type: "text",
        classes: ["field"],
        inputClasses: "input",
        events: {
          focusin: () => {
            const loginL = document.querySelector(
              `#${this.children.fields[4].props.idInput}`
            );
            loginL?.classList.remove(INPUT_ERROR);
=======
        className: "field",
        label: "Телефон",
        id: "phone",
        type: "phone",
        errorMessage: ErrorMessages.Phone_error,
        events: {
          focusout: (event) => {
            const currentField = this.children.fields[4]._element.children[2];
            return validator(currentField, "phone", event.target.value);
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
              `#${this.children.fields[5].props.idInput}`
            );
            loginL?.classList.remove(INPUT_ERROR);
=======
        className: "field",
        label: "Пароль",
        id: "password",
        type: "password",
        errorMessage: ErrorMessages.Password_error,
        events: {
          focusout: (event) => {
            const currentField = this.children.fields[5]._element.children[2];
            return validator(currentField, "password", event.target.value);
>>>>>>> origin/sprint_3
          },
        },
      }),
      new Input({
<<<<<<< HEAD
        label: "Пароль (еще раз)",
        idInput: "passwordYet",
        type: "password",
        classes: ["field"],
        inputClasses: "input",
        events: {
          focusin: () => {
            const loginL = document.querySelector(
              `#${this.children.fields[6].props.idInput}`
            );
            loginL?.classList.remove(INPUT_ERROR);
=======
        className: "field",
        label: "Пароль (ещё раз)",
        id: "check-password",
        type: "password",
        errorMessage: ErrorMessages.Password_error,
        events: {
          focusout: (event) => {
            const currentField = this.children.fields[6]._element.children[2];
            return validator(currentField, "password", event.target.value);
>>>>>>> origin/sprint_3
          },
        },
      }),
    ];
    this.children.fields = fields;

    const buttons = [
      new Button({
        label: "Зарегистрироваться",
<<<<<<< HEAD
        events: {
          click: () => {
            event.preventDefault();
            const valid = this.children.fields.reduce((acc, val) => {
              const result = val.onValidate();
              return acc && result;
            }, true);
            const logEmail = document.querySelector(
              `#${this.children.fields[0].props.idInput}`
            )!.value;
            const logLog = document.querySelector(
              `#${this.children.fields[1].props.idInput}`
            )!.value;
            const logFirstName = document.querySelector(
              `#${this.children.fields[2].props.idInput}`
            )!.value;
            const logSecondName = document.querySelector(
              `#${this.children.fields[3].props.idInput}`
            )!.value;
            const logPhone = document.querySelector(
              `#${this.children.fields[4].props.idInput}`
            )!.value;
            const logPass = document.querySelector(
              `#${this.children.fields[5].props.idInput}`
            )!.value;
            if (valid) {
              console.log({
                Почта: logEmail,
                Логин: logLog,
                Имя: logFirstName,
                Фамилия: logSecondName,
                Телефон: logPhone,
                Пароль: logPass,
              });
            }
          },
        },
        url: "",
        classes: "button main-button",
        type: "submit",
=======
        classes: "button main-button",
        events: {
          click: () => this.onSubmit(),
        },
      }),
      new Link({
        title: "Уже зарегистрированы?",
        to: "/sign-in",
>>>>>>> origin/sprint_3
      }),
    ];
    this.children.actions = buttons;
  }

<<<<<<< HEAD
  render() {
    return this.compile(template, { title: this.props.title });
=======
  onSubmit() {
    const values = Object.values(this.children.fields)
      .filter((child) => child instanceof Input)
      .map((child) => [
        child._element.childNodes[1].name,
        child._element.childNodes[1].value,
      ]);

    const data = Object.fromEntries(values);

    AuthController.signup(data as SignupData);
  }

  render() {
    return this.compile(template, { title: "Регистрация" });
>>>>>>> origin/sprint_3
  }
}
