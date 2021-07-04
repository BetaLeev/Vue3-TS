import * as axios from "axios";
declare module "axios" {
  interface AxiosInstance {
    interceptors: any;
    (config: AxiosRequestConfig): Promise<unknown>;
  }
}
