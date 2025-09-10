import type { IHttpClient } from "../interfaces/IHttpClient";

export class FetchAdapter implements IHttpClient {
  async get<T>(url: string): Promise<T> {
    const resp = await fetch(url);

    if (!resp.ok) {
      throw new Error(`Fetch error ${resp.status}`);
    }
    return (await resp.json()) as T;
  }
}
