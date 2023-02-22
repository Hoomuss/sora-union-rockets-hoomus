import styles from "./Input.module.scss";
import { IInputProps } from "./types";

export const Input: React.FC<IInputProps> = ({ errorString, ...rest }) => {
  return (
    <div className={styles["input"]}>
      <input
        className={[
          styles["input__input"],
          !!errorString && styles["input__input-error"],
        ]
          .filter((e) => !!e)
          .join(" ")}
        {...rest}
      />
      <span className={styles["input__error"]}>{errorString}</span>
    </div>
  );
};
