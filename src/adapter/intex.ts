import { SimpleHttpClient } from "./class/SimpleHttpClient.js";
import { FetchAdapter } from "./class/FetchAdapter.js";
import { AxiosAdapter } from "./class/AxiosAdapter.js";

type Todo = { userId: number; id: number; title: string; completed: boolean };

export default async function runAdapterDemo() {
  console.log("=== ADAPTER: Fetch <-> Axios ===\n");
  const url = "https://jsonplaceholder.typicode.com/todos/23";

  const client = new SimpleHttpClient(new FetchAdapter());
  const withFetch = await client.get<Todo>(url);
  console.log("Con fetch:", withFetch);

  client.setAdapter(new AxiosAdapter());
  const withAxios = await client.get<Todo>(url);
  console.log("Con axios:", withAxios);
  console.log();
}
