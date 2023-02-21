import styles from "./ConfirmDelete.module.scss";
import { IConfirmDeleteProps } from "./types";

export const ConfirmDelete: React.FC<IConfirmDeleteProps> = ({
  setModal,
  submitFunction,
  title,
}) => {
  return (
    <div className={styles["confirm"]}>
      <div className={styles["confirm__content"]}>
        <div className={styles["confirm__text"]}>
          Do you really want to remove {title}
        </div>
        <div className={styles["confirm__buttons"]}>
          <button
            className={styles["confirm__cancel"]}
            onClick={() => setModal(false)}
          >
            No
          </button>
          <button
            className={styles["confirm__submit"]}
            onClick={submitFunction}
          >
            Yes
          </button>
        </div>
      </div>
    </div>
  );
};
