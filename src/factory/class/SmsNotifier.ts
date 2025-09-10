import type { INotifier } from "../interfaces/INotifier.js";

export class SmsNotifier implements INotifier {
  send(to: string, message: string): void {
    if (!/^\+?\d{8,15}$/.test(to))
      throw new Error("Número SMS inválido (use formato internacional)");
    console.log(`[SMS] A: ${to} — ${message}`);
  }
}
