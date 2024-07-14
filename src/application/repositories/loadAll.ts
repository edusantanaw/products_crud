export interface ILoadAllRepository<T> {
  loadAll(): Promise<T[]>;
}
