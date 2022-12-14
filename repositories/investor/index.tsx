import HttpRequest, { RequestParams } from "../../config/http-request";
import { API } from "../../constant/api-constant";

class InvestorRepositories extends HttpRequest {
  constructor() {
    super();
    this.apiUrl = API.autopay.domain;
  }

  addInfoInvestor(data: any) {
    return this.post(`investment/add_more_info/`, data);
  }
}

export default new InvestorRepositories();
