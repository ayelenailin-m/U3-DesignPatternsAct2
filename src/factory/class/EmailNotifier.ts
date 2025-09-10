import type { INotifier } from "../interfaces/INotifier.js";

export class EmailNotifier implements INotifier {
  send(to: string, message: string): void {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to))
      throw new Error("Email inválido");
    console.log(`[Email] A: ${to} — ${message}`);
  }
}
