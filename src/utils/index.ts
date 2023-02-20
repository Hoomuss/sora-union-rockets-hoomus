import { Octokit } from "@octokit/core";
import { AUTH_KEY } from "@/consts/index";

export const requestItems = async (query: string) => {
  try {
    const octokit = new Octokit({
      auth: AUTH_KEY,
    });

    return (await octokit.request("GET /search/users", { q: query })).data;
  } catch {
    return null;
  }
};

export const debounce = (fn: Function, ms = 300) => {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};
