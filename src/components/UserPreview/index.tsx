import { IUser } from "@/models/response";
import { requestItems } from "@/utils";
import React from "react";
import { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import styles from "./UserPreview.module.scss";

const UserPreview: React.FC<IUser> = (user) => {
  const { login, avatar_url, html_url } = user;
  const [reposCount, setReposCount] = useState<number | null>(null);

  useEffect(() => {
    setReposCount(null);

    try {
      requestItems(`GET /users/${login}/repos`, { per_page: "100" }).then(
        (data) => {
          if (data) {
            setReposCount(data.length);
          }
        }
      );
    } catch {}
  }, [user]);

  return (
    <div className={styles["user-preview"]}>
      <img
        className={styles["user-preview__avatar"]}
        alt="avatar"
        src={avatar_url}
      />
      <a
        href={html_url}
        className={styles["user-preview__link"]}
        target="_blank"
      >
        {login}{" "}
        <span className={styles["user-preview__link-data"]}>
          {reposCount !== null ? (
            <>
              ({reposCount === 100 ? "more then " : ""}
              {reposCount} {reposCount === 1 ? "repository" : "repositories"})
            </>
          ) : (
            <ThreeDots
              height="40"
              width="40"
              color="#fa7d00"
              ariaLabel="line-wave"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          )}
        </span>
      </a>
    </div>
  );
};

export const UserPreviewMemo = React.memo(UserPreview);
