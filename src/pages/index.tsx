import { AddForm, Rocket } from "@/components";
import { IRocket } from "@/models/rocket";
import { useStoreState } from "@/store/hooks";
import styles from "@/styles/Home.module.scss";
import { useState } from "react";
import { RxPlusCircled } from "react-icons/rx";

export default function Home() {
  const [isAddFormShown, setIsAddFormShown] = useState<boolean>(false);
  const { users } = useStoreState((state) => state);

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
        <button
          onClick={() => setIsAddFormShown(true)}
          className={styles["header__button"]}
        >
          <RxPlusCircled size="30px" />
        </button>
      </header>
      <div>
        {users.map((e) => (
          <Rocket {...e} />
        ))}
      </div>
    </>
  );
}
