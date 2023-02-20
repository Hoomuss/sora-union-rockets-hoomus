import { IUser } from "@/models/response";
import { useState } from "react";
import { SearchUser } from "../SearchUser";
import styles from "./AddForm.module.scss";

export const AddForm = () => {
  const [chosenUser, setChosenUser] = useState<IUser | null>(null);
  console.log(chosenUser);
  return (
    <div>
      <SearchUser getChosenUser={setChosenUser} />
    </div>
  );
};
