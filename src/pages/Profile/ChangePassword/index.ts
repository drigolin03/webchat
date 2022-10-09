import Block from "../../../utils/Block";
import template from "./changePassword.pug";
import { Button } from "../../../components/button";
import { Input } from "../../../components/input";
import { DataField } from "../../../components/DataField";
import changeAvatar from "../../../assets/img/changeAvatar.png";

interface ChangePasswordProps {
  title: string;
  classes?: string;
  url?: string;
  children?: {
    fields: Block[];
    footer: Block[];
  };
}

export class ChangePassword extends Block {
  constructor(props: ChangePasswordProps) {
    super(props);
  }

  init() {
    const fields = [
      new DataField({
        label: "Поле",
        name: "Старый пароль",
        classes: ["data"],
        fieldValue: new Input({
          label: "",
          idInput: "oldPassword",
          type: "password",
          valueInput: "password",
          inputClasses: "info-field__value info-field__value_right",
        }),
      }),
      new DataField({
        label: "Поле",
        name: "Новый пароль",
        classes: ["data"],
        fieldValue: new Input({
          label: "",
          idInput: "newPassword",
          type: "password",
          valueInput: "newPassword",
          inputClasses: "info-field__value info-field__value_right",
        }),
      }),
      new DataField({
        label: "Поле",
        name: "Повторите новый пароль",
        classes: ["data"],
        fieldValue: new Input({
          label: "",
          idInput: "passwordYet",
          type: "password",
          valueInput: "newPassword",
          inputClasses: "info-field__value info-field__value_right",
        }),
      }),
    ];
    this.children.fields = fields;

    this.children.actions = new Button({
      label: "Сохранить",
      events: {
        click: () => console.log("clicked!"),
      },
      classes: "button main__button",
      url: "/profile",
    });
  }

  render() {
    return this.compile(template, { changeAvatar });
  }
}
