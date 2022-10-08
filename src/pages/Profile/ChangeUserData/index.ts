import Block from "../../../utils/Block";
import template from "./changeUserData.pug";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { DataField } from "../../../components/DataField";
import changeAvatar from "../../../assets/img/changeAvatar.png";

interface ChangeUserDataProps {
  title: string;
  classes?: string;
  url?: string;
  children?: {
    fields: Block[];
    footer: Block[];
  };
}

export class ChangeUserData extends Block {
  constructor(props: ChangeUserDataProps) {
    super(props);
  }

  init() {
    const fields = [
      new DataField({
        label: "Поле",
        name: "Почта",
        classes: "data",
        fieldValue: new Input({
          label: "",
          idInput: "email",
          type: "text",
          valueInput: "pochta@yandex.ru",
          inputClasses: "",
        }),
      }),
      new DataField({
        label: "Поле",
        name: "Логин",
        classes: "data",
        fieldValue: new Input({
          label: "",
          idInput: "login",
          type: "text",
          valueInput: "ivanivanov",
          inputClasses: "",
        }),
      }),
      new DataField({
        label: "Поле",
        name: "Имя",
        classes: "data",
        fieldValue: new Input({
          label: "",
          idInput: "first_name",
          type: "text",
          valueInput: "Иван",
          inputClasses: "",
        }),
      }),
      new DataField({
        label: "Поле",
        name: "Фамилия",
        classes: "data",
        fieldValue: new Input({
          label: "",
          idInput: "second_name",
          type: "text",
          valueInput: "Иванов",
          inputClasses: "",
        }),
      }),
      new DataField({
        label: "Поле",
        name: "Имя в чате",
        classes: "data",
        fieldValue: new Input({
          label: "",
          idInput: "display_name",
          type: "text",
          valueInput: "Иван",
          inputClasses: "",
        }),
      }),
      new DataField({
        label: "Поле",
        name: "Телефон",
        classes: "data",
        fieldValue: new Input({
          label: "",
          idInput: "phone",
          type: "text",
          valueInput: "+7 (909) 967 30 30",
          inputClasses: "",
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
