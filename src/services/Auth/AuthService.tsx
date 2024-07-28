import { AxiosResponse } from "axios";
import servicesInstance from "@/Lib/Request/Services";
import { rootRequest } from "../RootReques/RootRequest";
export interface RequestLogin {
  mail: string;
  password: string;
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

class AuthServices {
  login(body: RequestLogin): Promise<any> {
    return servicesInstance.post(rootRequest.LOGIN, body);
  }
}

export default new AuthServices();
