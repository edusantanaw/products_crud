export interface IController<In, Out> {
  handler(data: In): Promise<Out>;
}
