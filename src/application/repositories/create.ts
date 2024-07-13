export interface ICreateRepository<T> {
  create: (data: T) => Promise<T>;
}
