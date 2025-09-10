import { Channel } from "../interfaces/channel";
import type { INotifier } from "../interfaces/INotifier";
import { SmsNotifier } from "./SmsNotifier";
import { WhatsappNotifier } from "./WhatsappNotifier";
import { EmailNotifier } from "./EmailNotifier";

export class NotifierFactory {
  static create(channel: Channel): INotifier {
    switch (channel) {
      case "email":
        return new EmailNotifier();
      case "sms":
        return new SmsNotifier();
      case "whatsapp":
        return new WhatsappNotifier();
      default:
        throw new Error(`Canal no soportado: ${channel satisfies never}`);
    }
  }
}
