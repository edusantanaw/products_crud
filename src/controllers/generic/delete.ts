import { IController } from "../../@types/controller";
import { IHttpStatus } from "../../@types/http";
import { httpStatusBadRequest, httpStatusSuccess } from "../../helpers/http";

interface IDeleteUsecase {
  delete(id: string): Promise<{ message: string }>;
}

export class DeleteController implements IController<{ id: string }> {
  constructor(protected deleteUsecase: IDeleteUsecase) {}
  public async handler(data: { id: string }): Promise<IHttpStatus> {
    if (!data.id) return httpStatusBadRequest("Id is required!");
    const response = await this.deleteUsecase.delete(data.id);
    return httpStatusSuccess(response);
  }
}
