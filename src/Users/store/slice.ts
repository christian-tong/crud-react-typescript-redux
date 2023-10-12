import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type UserId = string;

export interface User {
  name: string;
  email: string;
  github: string;
}

export interface UserWithId extends User {
  id: UserId;
}

const DEFAULT_STATE = [
  {
    id: "1",
    name: "Christian",
    email: "christian.tongcruz96@gmail.com",
    github: "christian-tong",
  },
  {
    id: "2",
    name: "Mary",
    email: "mary.salinas@gmail.com",
    github: "mary-salinas",
  },
  {
    id: "3",
    name: "Duke",
    email: "duke.tong.salinas@gmail.com",
    github: "duke-tong-salinas",
  },
];

const initialState: UserWithId[] = (() => {
  const persistendState = localStorage.getItem("__redux__state__");
  return persistendState ? JSON.parse(persistendState).users : DEFAULT_STATE;
})();

export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addNewUser: (state, action: PayloadAction<User>) => {
      const id = crypto.randomUUID();
      return [...state, { id, ...action.payload }];
    },

    deleteUserById: (state, action: PayloadAction<UserId>) => {
      const id = action.payload;
      return state.filter((user) => user.id != id);
    },

    rollbackUser: (state, action: PayloadAction<UserWithId>) => {
      const isUserAlreadyDefined = state.some(
        (user) => user.id === action.payload.id
      );
      if (!isUserAlreadyDefined) {
        return [...state, action.payload];
      }
    },
  },
});

export default userSlice.reducer;

export const { addNewUser, deleteUserById, rollbackUser } = userSlice.actions;
