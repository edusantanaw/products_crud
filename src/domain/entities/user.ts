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

  public get getId() {
    return this.id;
  }

  public get getName() {
    return this.name;
  }

  public set setName(_name: string) {
    this.name = _name;
  }

  public get getPassword() {
    return this.password;
  }

  public set setPassword(_password: string) {
    this.password = _password;
  }

  public get getEmail() {
    return this.email;
  }

  public set setEmail(_email: string) {
    this.email = _email;
  }

  public get getDeleted() {
    return this.deleted;
  }

  public set setDelted(_deleted: boolean) {
    this.deleted = _deleted ? 1 : 0;
  }
}
