export interface IDeleteRepository {
  delete(id: string): Promise<void>;
}
