import Block from "../../../utils/Block";
import template from "./changePassword.pug";
import { Button } from "../../../components/button";
import { Input } from "../../../components/Input";
import { DataField } from "../../../components/DataField";
import { ValidationType } from "../../../utils/Validation";
import { Link } from "../../../components/Link";
import { ChangePasswordData } from "../../../api/UserAPI";
import UserController from "../../../controllers/UserController";
import changeAvatar from "../../../assets/img/changeAvatar.png";

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
        label: "Старый пароль",
        classes: "data",
        fieldValue: new Input({
          label: "",
          id: "oldPassword",
          type: ValidationType.Password,
        }),
      }),
      new DataField({
        label: "Новый пароль",
        classes: "data",
        fieldValue: new Input({
          label: "",
          id: "newPassword",
          type: ValidationType.Password,
        }),
      }),
      new DataField({
        label: "Повторите новый пароль",
        classes: "data",
        fieldValue: new Input({
          label: "",
          id: "password-check",
          type: ValidationType.Password,
        }),
      }),
    ];
    this.children.fields = fields;

    this.children.actions = [
      new Button({
        label: "Сохранить",
        events: {
          click: async () => {
            const inputs = document.querySelectorAll(".input");
            const data = Array.from(inputs).reduce((acc: any, input) => {
              acc[input.id as keyof ChangePasswordData] = (
                input as HTMLInputElement
              ).value;
              if ((input as HTMLInputElement).value === "") {
                return { oldPassword: "", newPassword: "" };
              }
              return acc;
            }, {} as Partial<ChangePasswordData>);
            await UserController.changePassword(data as ChangePasswordData);
          },
        },
        classes: "button main-button",
      }),
      new Link({
        title: "Отменить",
        to: "/profile",
      }),
    ];
  }

  render() {
    return this.compile(template, { changeAvatar });
  }
}
