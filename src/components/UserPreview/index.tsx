import { IUser } from "@/models/response";
import { requestItems } from "@/utils";
import React from "react";
import { useEffect, useState } from "react";
import styles from "./UserPreview.module.scss";

const UserPreview: React.FC<IUser> = (user) => {
  const { login, avatar_url, html_url } = user;
  const [followersCount, setFollowersCount] = useState<number>(0);
  const [reposCount, setReposCount] = useState<number>(0);

  useEffect(() => {
    setReposCount(0);
    setFollowersCount(0);
    try {
      requestItems(`GET /users/${login}/followers`).then((data) => {
        setFollowersCount(data.length);
      });
      requestItems(`GET /users/${login}/repos`).then((data) => {
        setReposCount(data.length);
      });
    } catch {}
  }, [user]);

  return (
    <div className={styles["user-preview"]}>
      <img
        className={styles["user-preview__avatar"]}
        alt="avatar"
        src={avatar_url}
      />
      <a href={html_url} className={styles["user-preview__link"]}>
        {login}{" "}
        <span className={styles["user-preview__link-data"]}>
          {" "}
          {!!followersCount && !!reposCount && (
            <>
              ({reposCount}
              {reposCount === 1 ? "repository" : "repositories"},{" "}
              {followersCount}
              {followersCount === 1 ? "follower" : "followers"})
            </>
          )}
        </span>
      </a>
    </div>
  );
};

export const UserPreviewMemo = React.memo(UserPreview);
