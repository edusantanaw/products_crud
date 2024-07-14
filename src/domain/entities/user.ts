import { randomUUID } from "node:crypto";

type data = {
  id?: string;
  name: string;
  email: string;
  password: string;
  deleted?: number;
};

const DEFAULT_USER_DELETED = 0;

export class UserEntity {
  private id: string;
  private name: string;
  private email: string;
  private password: string;
  private deleted: number;

  constructor(data: data) {
    this.id = data?.id ?? randomUUID();
    this.email = data.email;
    this.password = data.password;
    this.name = data.name;
    this.deleted = data?.deleted ?? DEFAULT_USER_DELETED;
  }

  public get getUser() {
    return {
      id: this.id,
      name: this.name,
      password: this.password,
      email: this.email,
      deleted: this.deleted,
    };
  }
}
