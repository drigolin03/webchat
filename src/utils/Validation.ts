<<<<<<< HEAD
enum ErrorInput {
  EMAIL = 'латиница, может включать цифры и спецсимволы вроде дефиса, обязательно должна быть @ и точка после нее, но перед точкой обязательно должны быть буквы',
  LOGIN = 'Логин должен содержать от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчеркивание',
  FIRTS_NAME = 'латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)',
  SECOND_NAME = 'латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)',
  PHONE = 'от 10 до 15 символов, состоит из цифр, может начинаться с плюса',
  PASSWORD = 'Пароль должен содержать от 8 до 40 символов, должна быть одна заглавная буква и цифра',
  DISPLAY_NAME = 'латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)',
  MESSAGE = 'не должно быть пустым',
  DEFAULT = 'не должно быть пустым',
}

enum RegInput {
  EMAIL = '^[a-z0-9._%$#+-]+@[a-z0-9]*[a-z]+.[a-z]+$',
  LOGIN = '^(?=.*[a-z])[a-zA-Z0-9_-]{3,20}$',
  FIRTS_NAME = '^[А-ЯA-Z][а-яА-ЯёЁa-zA-Z-]+$',
  SECOND_NAME = '^[А-ЯA-Z][а-яА-ЯёЁa-zA-Z-]+$',
  PHONE = '^[0-9+][0-9]{9,14}$',
  PASSWORD = '^(?=.*[A-Z])(?=.*[0-9]).{8,40}$',
  DISPLAY_NAME = '^[А-ЯA-Z][а-яА-ЯёЁa-zA-Z-]+$',
  MESSAGE = '[^s]',
  DEFAULT = '[^s]',
}

export function ValidationSettings(key: string): Array<string> {
  switch (key) {
    case 'email':
      return [ErrorInput.EMAIL, RegInput.EMAIL];
    case 'login':
      return [ErrorInput.LOGIN, RegInput.LOGIN];
    case 'first_name':
      return [ErrorInput.FIRTS_NAME, RegInput.FIRTS_NAME];
    case 'second_name':
      return [ErrorInput.SECOND_NAME, RegInput.SECOND_NAME];
    case 'phone':
      return [ErrorInput.PHONE, RegInput.PHONE];
    case 'password':
      return [ErrorInput.PASSWORD, RegInput.PASSWORD];
    case 'passwordYet':
      return [ErrorInput.PASSWORD, RegInput.PASSWORD];
    case 'oldPassword':
      return [ErrorInput.PASSWORD, RegInput.PASSWORD];
    case 'newPassword':
      return [ErrorInput.PASSWORD, RegInput.PASSWORD];
    case 'display_name':
      return [ErrorInput.DISPLAY_NAME, RegInput.DISPLAY_NAME];
    case 'message':
      return [ErrorInput.MESSAGE, RegInput.MESSAGE];
  }

  return [ErrorInput.DEFAULT, RegInput.DEFAULT];
}
=======
export type ValidationType = "email" | "name" | "login" | "password" | "phone";

export enum ErrorMessages {
  Email_error = "Латиница, может включать цифры и спецсимволы вроде дефиса, обязательно должна быть @ и точка после нее, но перед точкой обязательно должны быть буквы",
  Name_error = "Латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)",
  Login_error = "Логин должен содержать от 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчеркивание)",
  Password_error = "Пароль должен содержать от 8 до 40 символов, должна быть одна заглавная буква и цифра",
  Phone_error = "От 10 до 15 символов, состоит из цифр, может начинаться с плюса",
}

class Validator {
  email(value: string): boolean {
    const result =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/.test(
        value
      );

    return result;
  }

  name(value: string): boolean {
    const result = /[A-ZА-Я][a-zа-я]*/.test(value);

    return result;
  }

  login(value: string): boolean {
    const result = /(?!^\d+$)[A-Za-z0-9_]{3,20}/.test(value);

    return result;
  }

  password(value: string): boolean {
    const result =
      /[A-Za-z0-9]{8,40}/.test(value) &&
      /[A-Z]/.test(value) &&
      /[0-9]/.test(value);

    return result;
  }

  phone(value: string): boolean {
    const result = /\+?[0-9]{10,15}/.test(value);

    return result;
  }

  validate(type: ValidationType, value: string): boolean {
    switch (type) {
      case "email":
        return this.email(value);
      case "login":
        return this.login(value);
      case "name":
        return this.name(value);
      case "password":
        return this.password(value);
      case "phone":
        return this.phone(value);
    }
  }
}

export default new Validator();
>>>>>>> origin/sprint_3
