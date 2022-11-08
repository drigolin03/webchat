import Block from "../../../utils/Block";
import template from "./error500.pug";
<<<<<<< HEAD
=======
import { Link } from "../../../components/Link";
>>>>>>> origin/sprint_3
import "../styles.css";

interface Error500Props {
  title: string;
}

export class Error500 extends Block {
  constructor(props: Error500Props) {
    super(props);
  }
<<<<<<< HEAD

  render() {
    return this.compile(template, { ...this.props });
=======
  init(): void {
    this.children.back = new Link({
      title: "Назад к чатам",
      to: "/messenger",
      classes: "back",
    });
  }

  render() {
    return this.compile(template, { title: "500" });
>>>>>>> origin/sprint_3
  }
}
