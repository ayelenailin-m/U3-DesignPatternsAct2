import type { DBConfig, IConexionDB } from "../interfaces/IConexionDB.js";

export class ConexionDB implements IConexionDB {
  private static instance: ConexionDB | null = null;
  private connected = false;
  private constructor(private readonly cfg: DBConfig) {}

  static getInstance(cfg?: DBConfig): ConexionDB {
    if (!ConexionDB.instance) {
      if (!cfg) {
        throw new Error(
          "La primera invocación requiere configuración (host/port/user/database)."
        );
      }
      ConexionDB.instance = new ConexionDB(cfg);
    }
    return ConexionDB.instance;
  }

  connect(): void {
    if (this.connected) {
      console.log("La base de datos ya está conectada (Singleton).");
      return;
    }
    this.connected = true;
    console.log(
      `Conectado a la base de datos -> ${this.cfg.user}@${this.cfg.host}:${this.cfg.port}`
    );
  }

  disconnect(): void {
    if (!this.connected) {
      console.log("La base de datos ya está desconectada.");
      return;
    }
    this.connected = false;
    console.log("Desconectado de la base de datos.");
  }

  isConnected(): boolean {
    return this.connected;
  }

  info(): string {
    return `${this.cfg.database}@${this.cfg.host}:${this.cfg.port}`;
  }
}
