export interface IController<In> {
  handler(data: In): Promise<IHttpStatus>;
}
