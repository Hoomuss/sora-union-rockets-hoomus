import styles from "./AddForm.module.scss";
import { Octokit } from "@octokit/core";
import { useEffect } from "react";
import { URL } from "@/consts/index";

export const AddForm = () => {
  const requestItems = async (query: string) => {
    const octokit = new Octokit({
      auth: URL,
    });

    const { data } = await octokit.request("GET /search/users", { q: query });
    return data;
  };
  useEffect(() => {
    requestItems("ufoBeliever").then((e) => {
      console.log(e);
    });
  }, []);
  return <div></div>;
};
