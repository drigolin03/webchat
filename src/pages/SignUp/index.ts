import Block from "../../utils/Block";
import template from "./signUp.pug";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import "../../components/Input/styles.css";
import "./styles.css";

interface SignUpProps {
  title: string;
  classes?: string;
  url?: string;
  children?: {
    fields: Block[];
    footer: Block[];
  };
}

export class SignUp extends Block {
  constructor(props: SignUpProps) {
    super(props);
  }

  init() {
    const fields = [
      new Input({
        label: "Почта",
        idInput: "email",
        type: "text",
        classes: "field",
        inputClasses: "input",
        events: {
          click: () => {},
          focusin: () => {
            const loginL = document.querySelector(
              `#${this.children.fields[0].props.idInput}`
            );
            loginL?.classList.remove("field__input_error");
          },
        },
      }),
      new Input({
        label: "Логин",
        idInput: "login",
        type: "text",
        classes: "field",
        inputClasses: "input",
        events: {
          focusin: () => {
            const loginL = document.querySelector(
              `#${this.children.fields[1].props.idInput}`
            );
            loginL?.classList.remove("field__input_error");
          },
        },
      }),
      new Input({
        label: "Имя",
        idInput: "first_name",
        type: "text",
        classes: "field",
        inputClasses: "input",
        events: {
          focusin: () => {
            const loginL = document.querySelector(
              `#${this.children.fields[2].props.idInput}`
            );
            loginL?.classList.remove("field__input_error");
          },
        },
      }),
      new Input({
        label: "Фамилия",
        idInput: "second_name",
        type: "text",
        classes: "field",
        inputClasses: "input",
        events: {
          focusin: () => {
            const loginL = document.querySelector(
              `#${this.children.fields[3].props.idInput}`
            );
            loginL?.classList.remove("field__input_error");
          },
        },
      }),
      new Input({
        label: "Телефон",
        idInput: "phone",
        type: "text",
        classes: "field",
        inputClasses: "input",
        events: {
          focusin: () => {
            const loginL = document.querySelector(
              `#${this.children.fields[4].props.idInput}`
            );
            loginL?.classList.remove("field__input_error");
          },
        },
      }),
      new Input({
        label: "Пароль",
        idInput: "password",
        type: "password",
        classes: "field",
        inputClasses: "input",
        events: {
          focusin: () => {
            const loginL = document.querySelector(
              `#${this.children.fields[5].props.idInput}`
            );
            loginL?.classList.remove("field__input_error");
          },
        },
      }),
      new Input({
        label: "Пароль (еще раз)",
        idInput: "passwordYet",
        type: "password",
        classes: "field",
        inputClasses: "input",
        events: {
          focusin: () => {
            const loginL = document.querySelector(
              `#${this.children.fields[6].props.idInput}`
            );
            loginL?.classList.remove("field__input_error");
          },
        },
      }),
    ];
    this.children.fields = fields;

    const buttons = [
      new Button({
        label: "Зарегистрироваться",
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
        classes: "button main__button",
        type: "submit",
      }),
    ];
    this.children.actions = buttons;
  }

  render() {
    return this.compile(template, { title: this.props.title });
  }
}
