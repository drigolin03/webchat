import Block from "../../../utils/Block";
import template from "./changeUserData.pug";
<<<<<<< HEAD
import { Button } from "../../../components/button";
import { Input } from "../../../components/input";
import { DataField } from "../../../components/DataField";
import changeAvatar from "../../../assets/img/changeAvatar.png";
=======
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";
import { DataField } from "../../../components/DataField";
import { withStore } from "../../../utils/Store";
import UserController from "../../../controllers/UserController";
import { UserData } from "../../../api/UserAPI";
import router from "../../../utils/Router";
import changeAvatar from "../../../assets/img/changeAvatar.png";
import { Link } from "../../../components/Link";
>>>>>>> origin/sprint_3

interface ChangeUserDataProps {
  title: string;
  classes?: string[];
  url?: string;
  children?: {
    fields: Block[];
    footer: Block[];
  };
}

<<<<<<< HEAD
export class ChangeUserData extends Block {
=======
export class ChangeUserDataBase extends Block {
>>>>>>> origin/sprint_3
  constructor(props: ChangeUserDataProps) {
    super(props);
  }

  init() {
<<<<<<< HEAD
    const fields = [
      new DataField({
        label: "Поле",
        name: "Почта",
        classes: ["data"],
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
        classes: ["data"],
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
        classes: ["data"],
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
        classes: ["data"],
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
        classes: ["data"],
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
        classes: ["data"],
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
      classes: "button main-button",
      url: "/profile",
    });
  }

  render() {
    return this.compile(template, { changeAvatar });
  }
}
=======
    this.children.fields = [
      new DataField({
        label: "Почта",
        classes: "data",
        fieldValue: new Input({
          id: "email",
          type: "text",
          valueInput: this.props.email,
        }),
      }),
      new DataField({
        label: "Логин",
        classes: "data",
        fieldValue: new Input({
          id: "login",
          type: "text",
          valueInput: this.props.login,
        }),
      }),
      new DataField({
        label: "Имя",
        classes: "data",
        fieldValue: new Input({
          id: "first_name",
          type: "text",
          valueInput: this.props.first_name,
        }),
      }),
      new DataField({
        label: "Фамилия",
        classes: "data",
        fieldValue: new Input({
          id: "second_name",
          type: "text",
          valueInput: this.props.second_name,
        }),
      }),
      new DataField({
        label: "Имя в чате",
        classes: "data",
        fieldValue: new Input({
          id: "display_name",
          type: "text",
          valueInput: this.props.display_name,
        }),
      }),
      new DataField({
        label: "Телефон",
        classes: "data",
        fieldValue: new Input({
          id: "phone",
          type: "text",
          valueInput: this.props.phone,
        }),
      }),
    ];

    this.children.actions = [
      new Button({
        label: "Сохранить",
        events: {
          click: async () => {
            const inputs = document.querySelectorAll(".input");
            const data = Array.from(inputs).reduce((acc: any, input) => {
              acc[input.id as keyof UserData] = (
                input as HTMLInputElement
              ).value;
              if ((input as HTMLInputElement).value === "") {
                return { login: null, password: null };
              }
              return acc;
            }, {} as Partial<UserData>);
            await UserController.user(data as UserData);
            router.go("/profile");
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
    return this.compile(template, {
      title: "Изменить данные",
      ...this.props,
      display_name: this.props.display_name,
      changeAvatar,
    });
  }
}

const withUser = withStore((state) => ({ ...state.user }));

export const ChangeUserData = withUser(ChangeUserDataBase);
>>>>>>> origin/sprint_3
