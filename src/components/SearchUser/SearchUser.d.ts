import { IUser } from "@/models/response";

export interface ISearchUserProps {
  getChosenUser: (a: IUser) => any;
}
