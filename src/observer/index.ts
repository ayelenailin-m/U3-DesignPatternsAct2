import { Professor } from "./class/Professor.js";
import { Student } from "./class/Student.js";

export default async function runObserverDemo() {
  console.log("=== OBSERVER: Profesor -> Alumnos ===\n");
  const prof = new Professor("Centurión");
  const ailin = new Student("Ailin");
  const seba = new Student("Sebastián");

  prof.subscribe(ailin);
  prof.subscribe(seba);

  prof.publish("Actividad 2 - Design Patterns: TLPV — entrega martes 13:00.");
  // Baja a un alumno
  prof.unsubscribe(seba);
  prof.publish("TP3: Modelo CNN — entrega Viernes 23:00.");
  console.log();
}
