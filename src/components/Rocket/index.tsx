import { UserPreviewMemo } from "../UserPreview";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import styles from "./Rocket.module.scss";
import { useStoreActions } from "@/store/hooks";
import { IRocketProps } from "./types";
import { Modal } from "../Modal";
import { ConfirmDelete } from "../ConfirmDelete";
import { useState } from "react";

export const Rocket: React.FC<IRocketProps> = ({ rocket, editRocket }) => {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
  const { deleteUser } = useStoreActions((actions) => actions);
  const { userData, title, id, rocketName, description } = rocket;
  return (
    <>
      {isModalOpened && (
        <Modal>
          <ConfirmDelete
            setModal={setIsModalOpened}
            submitFunction={() => {
              deleteUser(id);
              setIsModalOpened(false);
            }}
            title={title}
          />
        </Modal>
      )}
      <div className={styles["rocket"]}>
        <header className={styles["rocket__header"]}>
          <span className={styles["rocket__heading"]}>{title}</span>
          {userData && (
            <div className={styles["rocket__buttons-wrapper"]}>
              <button
                className={styles["rocket__button"]}
                onClick={() => editRocket(rocket)}
              >
                <AiFillEdit size="20px" />
              </button>
              <button
                className={styles["rocket__button"]}
                onClick={() => setIsModalOpened(true)}
              >
                <AiFillDelete size="20px" />
              </button>
            </div>
          )}
        </header>
        <span className={styles["rocket__name"]}>{rocketName}</span>
        <span className={styles["rocket__description"]}>{description}</span>
        <div className={styles["rocket__github"]}>
          {userData && <UserPreviewMemo {...userData} />}
        </div>
      </div>
    </>
  );
};
