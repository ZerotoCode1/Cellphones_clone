import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
class Services {
  axios: AxiosInstance;
  constructor() {
    this.axios = axios.create({
      baseURL: "https://jsonplaceholder.typicode.com",
      withCredentials: false,
    });
  }

  get(url: string, config?: AxiosRequestConfig) {
    return this.axios.get(url, config);
  }
  post(url: string, data: any, config?: AxiosRequestConfig) {
    return this.axios.post(url, data, config);
  }
  delete(url: string, config?: AxiosRequestConfig) {
    return this.axios.delete(url, config);
  }

  put(url: string, data: any, config?: AxiosRequestConfig) {
    return this.axios.put(url, data, config);
  }
}

const servicesInstance = new Services();
export default servicesInstance;
