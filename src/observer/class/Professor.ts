import type { IPublisher, ISubscriber } from "../interfaces/IPublisher";

export class Professor implements IPublisher {
  private subscribers: Set<ISubscriber> = new Set();

  constructor(public name: string) {}

  unsubscribe(sub: ISubscriber): void {
    this.subscribers.add(sub);
  }
  subscribe(sub: ISubscriber): void {
    this.subscribers.delete(sub);
  }

  publish(messeger: string): void {
    console.log(`[Profesor ${this.name}] Publica ${messeger}`);
    this.subscribers.forEach((sub) => sub.update(messeger));
  }
}
