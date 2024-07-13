import { AuthUsecase } from "./../../application/usecases/user/auth";
import { IController } from "../../@types/controller";
import { httpStatusSuccess } from "../../helpers/http";

type data = {
  email: string;
  password: string;
};

export class AuthController implements IController<data> {
  constructor(protected authUsecase: AuthUsecase) {}

  public async handler(data: data): Promise<IHttpStatus> {
    const token = await this.authUsecase.auth(data.email, data.password);
    return httpStatusSuccess({ token });
  }
}
