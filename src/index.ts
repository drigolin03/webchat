import {pageError404} from './pages/Errors/Error404/error404';
import {pageError500} from './pages/Errors/Error500/error500';
import {pageSignIn} from './pages/SignIn/signIn';
import {pageSignUp} from './pages/SignUp/signUp';
import {pageProfile} from './pages/Profile/profile';
import {changePassword} from './pages/Profile/ChangePassword/changePassword';
import {changeUserData} from './pages/Profile/ChangeUserData/changeUserData';
import {pageChat} from './pages/Chat/chat';

function funPageSignIn() {
  pageSignIn();
}

function funPageSignUp() {
  pageSignUp();
}

function funPageProfile() {
  pageProfile();
}

function funPageProfileChangeUser() {
  changeUserData();
}

function funPageProfileChangePassword() {
  changePassword();
}

function funpageError404() {
  pageError404();
}

function funpageError500() {
  pageError500();
}

function funPageChat() {
  pageChat();
}

window.addEventListener('DOMContentLoaded', () => {
  const path = document.location.pathname;
  switch (path) {
    case '/':
      break;
    case '/auth':
      funPageSignIn();
      break;
    case '/registration':
      funPageSignUp();
      break;
    case '/profile':
      funPageProfile();
      break;
    case '/change-user-data':
      funPageProfileChangeUser();
      break;
    case '/change-password':
      funPageProfileChangePassword();
      break;
    case '/404':
      funpageError404();
      break;
    case '/500':
      funpageError500();
      break;
    case '/chat':
      funPageChat();
      break;
  }
});
