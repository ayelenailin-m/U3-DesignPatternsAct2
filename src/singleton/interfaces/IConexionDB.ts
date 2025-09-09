export interface DBConfig {
  host: string;
  port: number;
  user: string;
  database: string;
}

export interface IConexionDB {
  connect(): void;
  disconnect(): void;
  isConnected(): boolean;
  info(): string;
}
