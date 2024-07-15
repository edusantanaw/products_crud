export type IProduct = {
  id: string;
  name: string;
  description: string;
  price: number;
  createdAt?: Date;
  deleted: number;
};

export type IUser = {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt?: string;
    deleted: number;
  };