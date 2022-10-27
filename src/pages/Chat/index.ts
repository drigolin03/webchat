import { Dialog } from "../../components/Dialog";
import { Input } from "../../components/Input";
import Block from "../../utils/Block";
import template from "./chat.pug";
import avatar_stub from "../../assets/img/avatar_stub.png";
import camera from "../../assets/img/camera.png";
import settings_dots from "../../assets/img/settings_dots.svg";
import send_icon from "../../assets/img/send_icon.svg";
import search from "../../assets/img/search.svg";
import right_arrow_simple from "../../assets/img/right_arrow_simple.svg";
import status_delivered from "../../assets/img/status_delivered.svg";
import attach_file_icon from "../../assets/img/attach_file_icon.svg";

import "./styles.css";

interface ChatProps {
  title: string;
  classes?: string[];
  url?: string;
  children?: {
    fields: Block[];
    footer: Block[];
  };
}

export class Chat extends Block {
  constructor(props: ChatProps) {
    super(props);
  }

  init() {
    const chatList = [
      new Dialog({
        label: "",
        img: "",
        name: "Андрей",
        text: "Изображение",
        time: "10:59",
        newMessage: "2",
        classes: "chat",
      }),
      new Dialog({
        label: "",
        img: "",
        name: "Киноклуб",
        text: "стикер",
        time: "12:00",
        newMessage: "",
        classes: "chat",
      }),
      new Dialog({
        label: "",
        img: "",
        name: "Илья",
        text: "Друзья, у меня для вас особенный выпуск новостей!...",
        time: "15:12",
        newMessage: "4",
        classes: "chat",
      }),
      new Dialog({
        label: "",
        img: "",
        name: "Вадим",
        text: "Круто!",
        time: "Пт",
        newMessage: "",
        classes: "chat active",
      }),
      new Dialog({
        label: "",
        img: "",
        name: "тет-а-теты",
        text: "И Human Interface Guidelines и Material Design рекомендуют...",
        time: "Ср",
        newMessage: "",
        classes: "chat",
      }),
      new Dialog({
        label: "",
        img: "",
        name: "1, 2, 3",
        text: "Миллионы россиян ежедневно проводят десятки часов свое...",
        time: "Пн",
        newMessage: "",
        classes: "chat",
      }),
      new Dialog({
        label: "",
        img: "",
        name: "Design Destroyer",
        text: "В 2008 году художник Jon Rafman  начал собирать...",
        time: "Пн",
        newMessage: "",
        classes: "chat",
      }),
      new Dialog({
        label: "",
        img: "",
        name: "Day.",
        text: "Так увлёкся работой по курсу, что совсем забыл его анонсир...",
        time: "1 Мая 2020",
        newMessage: "",
        classes: "chat",
      }),
      new Dialog({
        label: "",
        img: "",
        name: "Стас Рогозин",
        text: "Можно или сегодня или завтра вечером.",
        time: "12 Апр 2020",
        newMessage: "",
        classes: "chat",
      }),
    ];
    this.children.chatList = chatList;

    const message = new Input({
      label: "",
      id: "message",
      events: {
        click() {},
      },
      className: "input send-message",
    });
    this.children.message = message;
  }

  render() {
    return this.compile(template, {
      avatar_stub,
      status_delivered,
      search,
      camera,
      send_icon,
      settings_dots,
      attach_file_icon,
      right_arrow_simple,
    });
  }
}
