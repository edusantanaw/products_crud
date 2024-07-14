export interface IUpdateRepository<T> {
  update(data: T): Promise<T>;
}
