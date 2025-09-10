import { NotifierFactory } from "./class/NotifierFactory";

export default function runFactoryDemo() {
  console.log("=== FACTORY: Crear notificaciones (Email/SMS/WhatsApp) ===\n");

  const email = NotifierFactory.create("email");
  const sms = NotifierFactory.create("sms");
  const wa = NotifierFactory.create("whatsapp");

  email.send(
    "ana@mail.com",
    "Recordatorio: Entregar la tarea antes de las 13:00."
  );
  sms.send(
    "+54937095300940",
    "Queda suspendida por sospecha de parricidio académico."
  );
  wa.send("+54937095052841", "El menú del día es: Pollo con sopa paraguaya.");
  console.log();
}
