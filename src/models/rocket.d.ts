import { IUser } from "./response";
export interface IRocket {
  id: number;
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
