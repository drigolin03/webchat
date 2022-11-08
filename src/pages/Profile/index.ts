import Block from "../../utils/Block";
import template from "./profile.pug";
import { DataField } from "../../components/DataField";
<<<<<<< HEAD
import "./styles.css";
import changeAvatar from "../../assets/img/changeAvatar.png";
=======
import { Button } from "../../components/Button";
import { Link } from "../../components/Link";
import store, { StoreEvents, withStore } from "../../utils/Store";
import AuthController from "../../controllers/AuthController";
import changeAvatar from "../../assets/img/changeAvatar.png";
import "./styles.css";
>>>>>>> origin/sprint_3

interface ProfileProps {
  title: string;
  classes?: string[];
  url?: string;
  children?: {
    fields: Block[];
    footer: Block[];
  };
}

<<<<<<< HEAD
export class Profile extends Block {
  constructor(props: ProfileProps) {
    super(props);
=======
export class ProfileBase extends Block {
  constructor() {
    const state = store.getState();

    super(state.user || {});
>>>>>>> origin/sprint_3
  }

  init() {
    const fields = [
      new DataField({
<<<<<<< HEAD
        label: "Поле",
        name: "Почта",
        value: "pochta@yandex.ru",
        classes: ["data"],
      }),
      new DataField({
        label: "Поле",
        name: "Логин",
        value: "ivanivanov",
        classes: ["data"],
      }),
      new DataField({
        label: "Поле",
        name: "Имя",
        value: "Иван",
        classes: ["data"],
      }),
      new DataField({
        label: "Поле",
        name: "Фамилия",
        value: "Иванов",
        classes: ["data"],
      }),
      new DataField({
        label: "Поле",
        name: "Имя в чате",
        value: "Иван",
        classes: ["data"],
      }),
      new DataField({
        label: "Поле",
        name: "Телефон",
        value: "+7 (909) 967 30 30",
        classes: ["data"],
      }),
    ];
    this.children.fields = fields;
  }

  render() {
    return this.compile(template, { changeAvatar });
  }
}
=======
        label: "Почта",
        value: this.props.email,
      }),
      new DataField({
        label: "Логин",
        value: this.props.login,
      }),
      new DataField({
        label: "Имя",
        value: this.props.first_name,
      }),
      new DataField({
        label: "Фамилия",
        value: this.props.second_name,
      }),
      new DataField({
        label: "Имя в чате",
        value: this.props.display_name,
      }),
      new DataField({
        label: "Телефон",
        value: this.props.phone,
      }),
    ];

    this.children.fields = fields;

    this.children.actions = [
      new Link({
        title: "Изменить данные",
        to: "/change-user-data",
        classes: "change-data",
      }),
      new Link({
        title: "Изменить пароль",
        to: "/change-password",
        classes: "change-password",
      }),
      new Button({
        label: "Выйти",
        classes: "logout text-danger",
        events: {
          click: () => {
            AuthController.logout();
          },
        },
      }),
    ];
  }
  protected componentDidUpdate(
    oldProps: ProfileProps,
    newProps: ProfileProps
  ): boolean {
    (this.children.fields as DataField[]).forEach((field, i) => {
      field.setProps({ value: newProps[userFields[i]] });
    });

    return false;
  }
  render() {
    return this.compile(template, {
      title: this.props.first_name || "Anon",
      props: this.props,
      changeAvatar,
    });
  }
}

const withUser = withStore((state) => ({ ...state.user }));

export const Profile = withUser(ProfileBase);
>>>>>>> origin/sprint_3
