import { CreateUserUsecase } from "../../application/usecases/user";
import { httpStatusCreated } from "../../helpers/http";

type data = {
  name: string;
  email: string;
  password: string;
};

export class CreateUserController {
  constructor(protected createUserUsecase: CreateUserUsecase) {}

  public async handler(data: data) {
    const user = await this.createUserUsecase.create(data);
    return httpStatusCreated(user);
  }
}
