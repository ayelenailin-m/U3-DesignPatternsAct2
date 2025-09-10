import axios from "axios";
import type { IHttpClient } from "../interfaces/IHttpClient";

export class AxiosAdapter implements IHttpClient {
  async get<T>(url: string): Promise<T> {
    const { data } = await axios.get<T>(url);
    return data;
  }
}
