import type { IHttpClient } from "../interfaces/IHttpClient.js";

export class SimpleHttpClient {
  constructor(private adapter: IHttpClient) {}

  setAdapter(adapter: IHttpClient) {
    this.adapter = adapter;
  }

  get<T>(url: string) {
    return this.adapter.get<T>(url);
  }
}
