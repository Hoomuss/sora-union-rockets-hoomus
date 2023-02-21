import { AddForm } from "@/components";
import { IUser } from "@/models/response";
import { IRocket } from "@/models/rocket";
import styles from "@/styles/Home.module.scss";
import { useState } from "react";

export default function Home() {
  const [isAddFormShown, setIsAddFormShown] = useState<boolean>(false);

  const [formData, setFormData] = useState<IRocket>({
    title: "",
    rocketName: "",
    description: "",
    userData: null,
  });
  return (
    <>
      <AddForm
        modalStateSetter={setIsAddFormShown}
        formData={formData}
        setFormData={setFormData}
        additionalClass={[
          styles["form"],
          isAddFormShown ? styles["form_opened"] : "",
        ].join(" ")}
      />
      <header className={styles["header"]}>
        <h1 className={styles["header__title"]}>🚀 List of Rockets</h1>
        <button onClick={() => setIsAddFormShown(true)}>+</button>
      </header>
    </>
  );
}
