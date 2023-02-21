import { action, createStore } from "easy-peasy";
import { IUsersModel } from "./types";

export const store = createStore<IUsersModel>({
  users: [],

  addUser: action((state, payload) => {
    state.users.push(payload);
  }),
  deleteUser: action((state, payload) => {
    state.users = state.users.filter((e) => e.id !== payload);
  }),
  updateUser: action((state, payload) => {
    state.users = [
      ...state.users.filter((e) => e.id !== payload.id),
      payload.newUser,
    ];
  }),
});
