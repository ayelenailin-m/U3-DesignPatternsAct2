import { log } from "console";
import type { ISubscriber } from "../interfaces/IPublisher";

export class Student implements ISubscriber {
  constructor(public name: string) {}

  update(messeger: string): void {
    console.log(
      `[Alumno ${this.name}] Tiene una nueva notificación ${messeger}`
    );
  }
}
