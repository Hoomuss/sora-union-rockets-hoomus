import { useState } from "react";
import { SearchUser } from "../SearchUser";
import styles from "./AddForm.module.scss";
import { Input } from "../Input";
import { TextArea } from "../Textarea";
import { IRocketErrors } from "@/models/rocket";
import { UserPreview } from "../UserPreview";
import { IAddFormProps } from "./types";
import { RxCrossCircled } from "react-icons/rx";

export const AddForm: React.FC<IAddFormProps> = ({
  formData,
  setFormData,
  additionalClass,
  modalStateSetter,
}) => {
  const [formErrors, setFormErrors] = useState<IRocketErrors>({
    title: "",
    rocketName: "",
    description: "",
    userData: "",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isValid = true;
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
        isValid = false;
      } else {
        newFormErrors[key as keyof typeof newFormErrors] = "";
      }
    }
    setFormErrors(newFormErrors);
    if (isValid) {
      console.log(formData);
    }
  };

  const closeModalHandler = () => {
    setFormData({
      title: "",
      rocketName: "",
      description: "",
      userData: null,
    });

    setFormErrors({
      title: "",
      rocketName: "",
      description: "",
      userData: "",
    });

    modalStateSetter(false);
  };
  return (
    <form
      onSubmit={onSubmit}
      className={styles["form"] + " " + additionalClass}
    >
      <header className={styles["form__header"]}>
        <h1 className={styles["form__heading"]}>New rocket ✨🚀✨</h1>
        <button
          type="reset"
          className={styles["form__close-button"]}
          onClick={closeModalHandler}
        >
          <RxCrossCircled size="30px" />
        </button>
      </header>
      <label className={styles["form__label"]}>
        <span className={styles["form__label-title"]}>Title</span>
        <Input
          onFocus={() => setFormErrors({ ...formErrors, title: "" })}
          errorString={formErrors.title}
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
      </label>
      <label className={styles["form__label"]}>
        <span className={styles["form__label-title"]}>Rocket name</span>
        <Input
          onFocus={() => setFormErrors({ ...formErrors, rocketName: "" })}
          errorString={formErrors.rocketName}
          value={formData.rocketName}
          onChange={(e) =>
            setFormData({ ...formData, rocketName: e.target.value })
          }
        />
      </label>
      <label className={styles["form__label"]}>
        <span className={styles["form__label-title"]}>Description</span>
        <TextArea
          onFocus={() => setFormErrors({ ...formErrors, description: "" })}
          errorString={formErrors.description}
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        />
      </label>
      <label className={styles["form__label"]}>
        <span className={styles["form__label-title"]}>GitHub user</span>
        <div className={styles["form__search-user"]}>
          <SearchUser
            onFocus={() => setFormErrors({ ...formErrors, userData: "" })}
            getChosenUser={(user) =>
              setFormData({ ...formData, userData: user })
            }
            errorString={formErrors.userData}
          />
          {formData.userData && <UserPreview {...formData.userData} />}
        </div>
      </label>

      <input
        type="submit"
        className={styles["form__submit"]}
        value="Create rocket"
      />
    </form>
  );
};
