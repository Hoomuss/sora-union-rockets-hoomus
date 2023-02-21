import { createTypedHooks } from "easy-peasy";
import { IUsersModel } from "./types";

const typedHooks = createTypedHooks<IUsersModel>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
