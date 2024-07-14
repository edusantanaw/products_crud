import { IController } from "../../@types/controller";
import { httpStatusSuccess } from "../../helpers/http";

interface ILoadByIdUsecase<T> {
  loadById(id: string): Promise<T>;
}

export class LoadByIdController<T> implements IController<{ id: string }> {
  constructor(protected loadByIdUsecase: ILoadByIdUsecase<T>) {}
  public async handler({ id }: { id: string }) {
    const item = await this.loadByIdUsecase.loadById(id);
    return httpStatusSuccess(item);
  }
}
