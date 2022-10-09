import Block from '../../utils/Block';
import template from './errorMessage.pug';
import './styles.css';

interface ErrorMessageProps {
  errorMessage: string;
}

export class ErrorMessage extends Block {
  constructor(props: ErrorMessageProps) {
    super(props);
  }

  render() {
    return this.compile(template, {
      errorMessage: this.props.errorMessage,
    });
  }
}
