export interface IUserData {
  avatar_url: string;
  followers_url: string;
  html_url: string;
  login: string;
}

export interface IRocket {
  title: string;
  rocketName: string;
  description: string;
  userData: IUserData;
}
