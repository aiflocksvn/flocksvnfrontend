import HttpRequest, { RequestParams } from "../../config/http-request";
import { API } from "../../constant/api-constant";

class LoginRepositories extends HttpRequest {
  constructor() {
    super();
    this.apiUrl = API.autopay.domain;
  }

  loginEmailPassword(data: any) {
    return this.post(`auth/email/sing_in/`, data);
  }

  loginGoogle(provider: RequestParams) {
    return this.get(`auth/social/oauth_uri`, provider);
  }

  signUpEmailPassword(data: any) {
    return this.post(`auth/email/sign_up/`, data);
  }

  verifyEmailPassword(token: RequestParams) {
    return this.post("auth/email/sign_up/verify/", token);
  }
}

export default new LoginRepositories();
