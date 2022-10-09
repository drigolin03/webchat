import {ChangePassword} from '.';

export function changePassword() {
  const root = document.querySelector('#app')!;

  const changePassword = new ChangePassword({title: ''});

  root.innerHTML = '';
  root.append(changePassword.getContent()!);
}
