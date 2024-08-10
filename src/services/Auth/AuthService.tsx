import { AxiosResponse } from "axios";
import servicesInstance from "@/Lib/Request/Services";
import { rootRequest } from "../RootReques/RootRequest";
import queryString from "query-string";
export interface RequestLogin {
  mail: string;
  password: string;
}
export interface RequestProfile {
  _id: string;
}

interface ResponseLogin {
  address: string;
  avatar: string;
  createSource: string;
  cusId: number;
  cusName: string;
  dateOfBirth: string;
  email: string;
  idCard: number;
  partnerId: number;
  phone: string;
  roleId: number;
  token: string;
}

export type Response = AxiosResponse<{
  mail: string;
  password: string;
  accessToken: string;
  refreshToken: string;
  user: string;
  role: number;
  _id: string;
}>;

interface RequestRefreshToken {
  mail: string;
}
class AuthServices {
  login(body: RequestLogin): Promise<any> {
    return servicesInstance.post(rootRequest.LOGIN, body);
  }
  getPropFile(param: RequestProfile): Promise<any> {
    return servicesInstance.get(
      `${rootRequest.PROFILE}?${queryString.stringify(param)}`
    );
  }
  refreshToken(body: RequestRefreshToken): Promise<any> {
    return servicesInstance.post(rootRequest.REFECTH_TOKEN, {
      token: localStorage.getItem("refreshToken"),
      ...body,
    });
  }
}

export default new AuthServices();
