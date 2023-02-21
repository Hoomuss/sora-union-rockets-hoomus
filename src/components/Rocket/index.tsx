import { IRocket } from "@/models/rocket";
import { UserPreview } from "../UserPreview";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import styles from "./Rocket.module.scss";
import { useStoreActions } from "@/store/hooks";

export const Rocket: React.FC<IRocket> = (rocket) => {
  const { deleteUser } = useStoreActions((actions) => actions);
  return (
    <div className={styles["rocket"]}>
      <header className={styles["rocket__header"]}>
        <span className={styles["rocket__heading"]}>{rocket.title}</span>
        <div className={styles["rocket__buttons-wrapper"]}>
          <button className={styles["rocket__button"]}>
            <AiFillEdit size="20px" />
          </button>
          <button
            className={styles["rocket__button"]}
            onClick={() => deleteUser(rocket.userData?.id)}
          >
            <AiFillDelete size="20px" />
          </button>
        </div>
      </header>
      <span className={styles["rocket__name"]}>{rocket.rocketName}</span>
      <span className={styles["rocket__description"]}>
        {rocket.description}
      </span>
      <div className={styles["rocket__github"]}>
        {rocket.userData && <UserPreview {...rocket.userData} />}
      </div>
    </div>
  );
};
