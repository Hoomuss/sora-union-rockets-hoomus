import { Octokit } from "@octokit/core";
import { AUTH_KEY } from "@/consts/index";
import { RequestParameters } from "@octokit/types";

export const requestItems = async (
  request: string,
  query?: RequestParameters
) => {
  try {
    const octokit = new Octokit({
      auth: AUTH_KEY,
    });

    return (await octokit.request(request, query)).data;
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
