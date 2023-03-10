import { useCallback, useEffect, useRef, useState } from "react";
import { IUser } from "@/models/response";
import { debounce, requestItems } from "@/utils";
import styles from "./SearchUser.module.scss";
import { ISearchUserProps } from "./SearchUser";

export const SearchUser: React.FC<ISearchUserProps> = ({
  getChosenUser,
  errorString,
  ...rest
}) => {
  const [currentQueryString, setCurrentQueryString] = useState<string>("");
  const [queryString, setQueryString] = useState<string>("");
  const [currentVariants, setCurrentVariants] = useState<IUser[]>([]);

  const input = useRef<HTMLDivElement | null>(null);
  const closeInput = (e: Event) => {
    if (!input.current?.contains(e.target as Document)) {
      setCurrentVariants([]);
    }
  };

  useEffect(() => {
    document.addEventListener("click", closeInput);

    return () => {
      document.removeEventListener("click", closeInput);
    };
  }, []);

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentQueryString(e.target.value);
  };

  const setQueryStringDebounce = useCallback(
    debounce((currentQueryString: string) => {
      setQueryString(currentQueryString);
    }, 500),
    []
  );

  useEffect(
    () => setQueryStringDebounce(currentQueryString),
    [currentQueryString, queryString]
  );

  useEffect(() => {
    if (queryString) {
      requestItems("GET /search/users", { q: queryString }).then((e) => {
        if (e?.items) {
          setCurrentVariants(e.items);
        }
      });
    } else {
      setCurrentVariants([]);
    }
  }, [queryString]);

  const chooseHandler = (e: IUser) => {
    getChosenUser(e);
    setCurrentQueryString("");
    setQueryString("");
  };

  return (
    <div className={styles["input"]} ref={input}>
      <input
        value={currentQueryString}
        onChange={inputHandler}
        className={[
          styles["input__input"],
          !!errorString && styles["input__input-error"],
        ]
          .filter((e) => !!e)
          .join(" ")}
        {...rest}
      />
      <span className={styles["input__error"]}>{errorString}</span>
      <div className={styles["input__variants-wrapper"]}>
        {currentVariants.map((e) => {
          const { login, id } = e;
          return (
            <div
              key={id}
              onClick={() => chooseHandler(e)}
              className={styles["input__variant"]}
            >
              {login}
            </div>
          );
        })}
      </div>
    </div>
  );
};
