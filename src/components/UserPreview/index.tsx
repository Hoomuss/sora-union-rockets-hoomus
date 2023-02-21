import { IUser } from "@/models/response";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./UserPreview.module.scss";

export const UserPreview: React.FC<IUser> = (user) => {
  const [followersCount, setFollowersCount] = useState<number | null>(null);
  const [reposCount, setReposCount] = useState<number | null>(null);

  useEffect(() => {
    axios.get(user.followers_url).then(({ data }) => {
      setFollowersCount(data.length);
    });
    axios.get(user.repos_url).then(({ data }) => {
      setReposCount(data.length);
    });
  }, [user]);

  return (
    <div className={styles["user-preview"]}>
      <img
        className={styles["user-preview__avatar"]}
        alt="avatar"
        src={user.avatar_url}
      />
      <a href={user.html_url} className={styles["user-preview__link"]}>
        {user.login}{" "}
        {followersCount && reposCount && (
          <>
            ({reposCount} repos, {followersCount} followers)
          </>
        )}
      </a>
    </div>
  );
};
