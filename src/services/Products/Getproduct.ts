import { AxiosResponse } from "axios";
import servicesInstance from "@/Lib/Request/Services";
import { rootRequest } from "../RootReques/RootRequest";
import { stringify } from "querystring";
import querystring from "query-string";
export interface ResponseProduct {
  _id: string;
  productName: string;
  image: string;
  price: number;
  description: string;
  status: boolean;
}
export interface ResponseProductById {
  numberTechnical: [];
  productName: string;
  image: string[];
  price: string;
  description: string;
  category_id: string;
  content: string;
  vdeo: string;
  version: [quannity: [], data: [], priceVersion: any];
  versionColor: [
    {
      name: string;
      image: string;
    }
  ];
}
export type Response = AxiosResponse<{
  data: ResponseProduct[];
}>;
export interface RequestGetProductByCategory {
  limit: number;
  offset?: string;
  productName?: string;
  category_id: string;
}
export interface RequestGetProductById {
  _id: string;
}
export interface RequestRateProduct {
  productId: string;
  rating: number;
  comment: string;
  image?: string;
}
interface RateStatics {
  productId: string;
}
interface GetRate {
  productId: string;
  numberRate?: number;
  image?: any;
}
class ProductServices {
  getProDuctByCategory(body: RequestGetProductByCategory): Promise<Response> {
    return servicesInstance.get(
      `${rootRequest.LISTPRODUCTBYCATEGORY}?${querystring.stringify(body)}`
    );
  }
  getProDuctById(
    body: RequestGetProductById
  ): Promise<AxiosResponse<ResponseProductById>> {
    return servicesInstance.get(
      `${rootRequest.PRODUCTBYID}?${querystring.stringify(body)}`
    );
  }
  rateProduct(body: FormData) {
    return servicesInstance.post(rootRequest.RATEPRODUCT, body);
  }
  getRateProduct(body: GetRate) {
    return servicesInstance.get(
      `${rootRequest.RATEPRODUCTID}?${querystring.stringify(body)}`
    );
  }
  getRateStaticPeoduct(body: RateStatics) {
    return servicesInstance.get(
      `${rootRequest.STATICSRATE}?${querystring.stringify(body)}`
    );
  }
}

export default new ProductServices();
