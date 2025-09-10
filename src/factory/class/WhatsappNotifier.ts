import type { INotifier } from "../interfaces/INotifier.js";

export class WhatsappNotifier implements INotifier {
  send(to: string, message: string): void {
    if (!/^\+?\d{8,15}$/.test(to)) throw new Error("Número WhatsApp inválido");
    console.log(`[WhatsApp] A: ${to} — ${message}`);
  }
}
