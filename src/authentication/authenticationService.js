export const AUTHENTICATED_USER = "AUTHENTICATED_USER";

class AuthenticationService {
  registerSuccessfulLogin(username, password) {
    sessionStorage.setItem(AUTHENTICATED_USER, username);
    console.log("register");
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    if (user === null) return false;
    return true;
  }
}

export default new AuthenticationService();
