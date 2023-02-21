import { IUser } from "@/models/response";
import { useState } from "react";
import { SearchUser } from "../SearchUser";
import styles from "./AddForm.module.scss";
import { Input } from "../Input";
import { TextArea } from "../Textarea";
import { IRocket, IRocketErrors } from "@/models/rocket";

export const AddForm = () => {
  const [chosenUser, setChosenUser] = useState<IUser | null>(null);

  const [formData, setFormData] = useState<IRocket>({
    title: "",
    rocketName: "",
    description: "",
    userData: null,
  });

  const [formErrors, setFormErrors] = useState<IRocketErrors>({
    title: "",
    rocketName: "",
    description: "",
    userData: "",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let newFormErrors: IRocketErrors = {
      title: "",
      rocketName: "",
      description: "",
      userData: "",
    };
    for (let key in formData) {
      if (!formData[key as keyof typeof formData]) {
        newFormErrors[key as keyof typeof newFormErrors] =
          "This field is required";
      } else {
        newFormErrors[key as keyof typeof newFormErrors] = "";
      }
    }
    setFormErrors(newFormErrors);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>
        Title
        <Input
          errorString={formErrors.title}
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </label>
      <label>
        Rocket name
        <Input
          errorString={formErrors.rocketName}
          value={formData.rocketName}
          onChange={(e) =>
            setFormData({ ...formData, rocketName: e.target.value })
          }
        />
      </label>
      <label>
        Description
        <TextArea
          errorString={formErrors.description}
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      </label>
      <SearchUser getChosenUser={setChosenUser} />
      <input type="submit" />
    </form>
  );
};
