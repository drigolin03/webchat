<<<<<<< HEAD
import Block from '../../../utils/Block';
import template from './error404.pug';
import '../styles.css';
=======
import Block from "../../../utils/Block";
import template from "./error404.pug";
import { Link } from "../../../components/Link";
import "../styles.css";
>>>>>>> origin/sprint_3

interface Error404Props {
  title: string;
}

export class Error404 extends Block {
  constructor(props: Error404Props) {
    super(props);
  }

<<<<<<< HEAD
  render() {
    return this.compile(template, {...this.props});
=======
  init(): void {
    this.children.back = new Link({
      title: "Назад к чатам",
      to: "/messenger",
      classes: "back",
    });
  }

  render() {
    return this.compile(template, { title: "404" });
>>>>>>> origin/sprint_3
  }
}
