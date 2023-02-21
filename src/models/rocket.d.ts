import { IUser } from "./response";
export interface IRocket {
  title: string;
  rocketName: string;
  description: string;
  userData: IUser | null;
}

export interface IRocketErrors {
  title: string;
  rocketName: string;
  description: string;
  userData: string;
}
