import Block from '../../utils/Block';
import template from './dialog.pug';
import avatar_stub from '../../assets/img/avatar_stub.png';
import './styles.css';

interface DialogProps {
  label: string;
  classes?: string;
  img?: string;
  name?: string;
  text?: string;
  time?: string;
  newMessage?: string;
}

export class Dialog extends Block {
  constructor(props: DialogProps) {
    super(props);
  }

  render() {
    return this.compile(template, {
      avatar_stub,
      label: this.props.label,
      img: this.props.img,
      name: this.props.name,
      text: this.props.text,
      time: this.props.time,
      newMessage: this.props.newMessage,
    });
  }
}
