import UserModel from "../entities/user";

export class UserRepository {
  private repository = UserModel;

  public async loadByEmail(email: string) {
    const user = await this.repository.findOne({
      where: {
        email,
      },
    });
    if (!user) return null;
    return user.toJSON();
  }

  public async create(data: IUser) {
    const user = await this.repository.create(data);
    await user.save();
    return user.toJSON();
  }
}
