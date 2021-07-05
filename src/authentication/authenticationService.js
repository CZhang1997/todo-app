export const AUTHENTICATED_USER = "AUTHENTICATED_USER";

class AuthenticationService {
  registerSuccessfulLogin(username, password) {
    sessionStorage.setItem(AUTHENTICATED_USER, username);
    console.log("register");
  }

  logout() {
    sessionStorage.removeItem(AUTHENTICATED_USER);
  }
}

export default new AuthenticationService();
