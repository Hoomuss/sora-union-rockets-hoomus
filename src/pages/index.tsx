import { AddForm, Rocket } from "@/components";
import { IRocket } from "@/models/rocket";
import { useStoreState } from "@/store/hooks";
import styles from "@/styles/Home.module.scss";
import { useEffect, useState } from "react";
import { RxPlusCircled } from "react-icons/rx";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function Home() {
  const [isAddFormShown, setIsAddFormShown] = useState<boolean>(false);
  const [mode, setMode] = useState<"add" | "edit">("add");
  const { users } = useStoreState((state) => state);

  const [formData, setFormData] = useState<IRocket>({
    id: 0,
    title: "",
    rocketName: "",
    description: "",
    userData: null,
  });

  const editRocket = (formData: IRocket) => {
    setIsAddFormShown(true);
    setMode("edit");
    setFormData(formData);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    const addForm = document.getElementById("addForm");
    if (addForm) {
      addForm.scrollTo(0, 0);
    }
  }, [isAddFormShown]);
  return (
    <>
      <AddForm
        id="addForm"
        mode={mode}
        modalStateSetter={setIsAddFormShown}
        formData={formData}
        setFormData={setFormData}
        additionalClass={[
          styles["form"],
          isAddFormShown ? styles["form_opened"] : "",
        ].join(" ")}
      />
      <div className={styles["wrapper"]}>
        <header className={styles["header"]}>
          <h1 className={styles["header__title"]}>🚀 List of Rockets</h1>
          <button
            onClick={() => {
              setIsAddFormShown(true);
              setMode("add");
            }}
            className={styles["header__button"]}
          >
            <RxPlusCircled size="30px" />
          </button>
        </header>

        <TransitionGroup className={styles["items-wrapper"]}>
          {users
            .sort((el1, el2) => el1.id - el2.id)
            .map((e) => (
              <CSSTransition key={e.id} timeout={500} classNames="item">
                <Rocket editRocket={editRocket} rocket={e} />
              </CSSTransition>
            ))}
          {!users.length && (
            <CSSTransition key={"no-items"} timeout={500} classNames="item">
              <div className={styles["items-wrapper__no-items"]}>
                <div>No rockets yet ⛔</div>
              </div>
            </CSSTransition>
          )}
        </TransitionGroup>
      </div>
    </>
  );
}
