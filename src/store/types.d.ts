import { IRocket } from "@/models/rocket";
import { Action } from "easy-peasy";

export interface IStoreModel {
  users: IRocket[];
}

export interface IUsersModel {
  users: IRocket[];
  addUser: Action<IStoreModel, IRocket>;
  deleteUser: Action<IStoreModel, number>;
  updateUser: Action<IStoreModel, { id: number; newRocket: IRocket }>;
}
