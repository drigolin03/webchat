import { ChangeUserData } from ".";

export function changeUserData() {
  const root = document.querySelector("#app")!;

  const changeUserData = new ChangeUserData({ title: "" });

  root.innerHTML = "";
  root.append(changeUserData.getContent()!);
}
