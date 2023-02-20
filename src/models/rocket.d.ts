import { GetResponseDataTypeFromEndpointMethod } from "@octokit/types";

export interface IRocket {
  title: string;
  rocketName: string;
  description: string;
  userData: GetResponseDataTypeFromEndpointMethod.items;
}
