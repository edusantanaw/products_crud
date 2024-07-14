import { IController } from "../../@types/controller";
import { httpStatusSuccess } from "../../helpers/http";

interface ILoadAllUsecase<T> {
  loadAll(): Promise<T[]>;
}

export class LoadAllController<T> implements IController<null> {
  constructor(protected loadAllUsecase: ILoadAllUsecase<T>) {}

  public async handler(): Promise<IHttpStatus> {
    const items = await this.loadAllUsecase.loadAll();
    return httpStatusSuccess(items);
  }
}
