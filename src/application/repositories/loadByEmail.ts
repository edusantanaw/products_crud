export interface ILoadByEmailRepository<T> {
  loadByEmail(email: string): Promise<T | undefined | null>;
}
