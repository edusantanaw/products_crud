import { IController } from "../../@types/controller";
import { IHttpStatus } from "../../@types/http";
import { httpStatusSuccess } from "../../helpers/http";

interface ILoadAllUsecase<Input, T> {
  loadAll(data?: Input): Promise<T[]>;
}

export class LoadAllController<Input, T> implements IController<Input> {
  constructor(protected loadAllUsecase: ILoadAllUsecase<Input, T>) {}

  public async handler(data: Input): Promise<IHttpStatus> {
    const items = await this.loadAllUsecase.loadAll(data);
    return httpStatusSuccess(items);
  }
}
