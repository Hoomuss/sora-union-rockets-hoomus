import styles from "./Textarea.module.scss";
import { ITextareaProps } from "./types";

export const TextArea: React.FC<ITextareaProps> = ({
  errorString,
  ...rest
}) => {
  return (
    <div className={styles["textarea"]}>
      <textarea className={styles["textarea__textarea"]} {...rest} />
      <span className={styles["textarea__error"]}>{errorString}</span>
    </div>
  );
};
