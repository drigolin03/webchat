import { Error404 } from "./pages/Errors/Error404";
import { Error500 } from "./pages/Errors/Error500";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Profile } from "./pages/Profile";
import { ChangePassword } from "./pages/Profile/ChangePassword";
import { ChangeUserData } from "./pages/Profile/ChangeUserData";
import { Chat } from "./pages/Chat";
import Block from "./utils/Block";

// TODO: page types
export function renderPage(selector: string, page: any) {
  const root = document.querySelector(selector)!;

  root.innerHTML = "";
  root.append(page.getContent()!);
}

window.addEventListener("DOMContentLoaded", () => {
  const path = document.location.pathname;
  switch (path) {
    case "/":
      break;
    case "/auth":
      renderPage("#app", new SignIn({ title: "Вход" }));
      break;
    case "/registration":
      renderPage("#app", new SignUp({ title: "Регистрация" }));
      break;
    case "/profile":
      renderPage("#app", new Profile({ title: "Иван" }));
      break;
    case "/change-user-data":
      // funPageProfileChangeUser();
      renderPage("#app", new ChangeUserData({ title: "" }));
      break;
    case "/change-password":
      renderPage("#app", new ChangePassword({ title: "" }));
      break;
    case "/404":
      renderPage("#app", new Error404({ title: "404" }));
      break;
    case "/500":
      renderPage("#app", new Error500({ title: "500" }));
      break;
    case "/chat":
      renderPage("#app", new Chat({ title: "" }));
      break;
  }
});
