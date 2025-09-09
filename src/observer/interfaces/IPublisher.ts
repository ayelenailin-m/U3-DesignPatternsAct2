export interface ISubscriber {
  update(messeger: string): void;
}
export interface IPublisher {
  subscribe(sub: ISubscriber): void;
  unsubscribe(sub: ISubscriber): void;
  publish(messeger: string): void;
}
