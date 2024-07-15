export interface ILoadAllRepository<Input, T> {
  loadAll(data?: Input): Promise<T[]>;
}
