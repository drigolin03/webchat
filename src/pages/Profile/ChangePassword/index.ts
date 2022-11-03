import Block from "../../../utils/Block";
import template from "./changePassword.pug";
import { Button } from "../../../components/button";
import { Input } from "../../../components/Input";
import { DataField } from "../../../components/DataField";
import changeAvatar from "../../../assets/img/changeAvatar.png";
import { ValidationType } from "../../../utils/Validation";

interface ChangePasswordProps {
  title: string;
  classes?: string[];
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
          id: "oldPassword",
          type: ValidationType.Password,
        }),
      }),
      new DataField({
        label: "Поле",
        name: "Новый пароль",
        classes: ["data"],
        fieldValue: new Input({
          label: "",
          id: "newPassword",
          type: ValidationType.Password,
        }),
      }),
      new DataField({
        label: "Поле",
        name: "Повторите новый пароль",
        classes: ["data"],
        fieldValue: new Input({
          label: "",
          id: "password-check",
          type: ValidationType.Password,
        }),
      }),
    ];
    this.children.fields = fields;

    this.children.actions = new Button({
      label: "Сохранить",
      events: {
        click: () => console.log("clicked!"),
      },
      classes: "button main-button",
      url: "/profile",
    });
  }

  render() {
    return this.compile(template, { changeAvatar });
  }
}
