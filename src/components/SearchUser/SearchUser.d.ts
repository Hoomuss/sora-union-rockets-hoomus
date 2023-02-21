import { IUser } from "@/models/response";

export interface ISearchUserProps
  extends React.ComponentPropsWithoutRef<"input"> {
  getChosenUser: (a: IUser) => any;
  errorString: string;
}
