import { defaultMaxListeners } from "events";
import { ConexionDB } from "./class/ConexionDB";

export default function runSingletonDemo() {
  console.log("=== SINGLETON: ConexionDB de Inventario ===\n");

  // Primera vez -> se crea con config
  const db1 = ConexionDB.getInstance({
    host: "localhost",
    port: 5432,
    user: "inventario_user",
    database: "inventario",
  });

  db1.connect();
  // Segunda vez -> devuelve la misma instancia, ignora nuevos params
  const db2 = ConexionDB.getInstance();
  db2.connect();

  db1.disconnect();
  db2.disconnect();
  console.log();
}
