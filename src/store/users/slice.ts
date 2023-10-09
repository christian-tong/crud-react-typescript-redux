import { createSlice } from "@reduxjs/toolkit";

export interface User {
  name: string;
  email: string;
  github: string;
}

export interface UserWithId extends User {
  id: string;
}

const initialState: UserWithId[] = [
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

export const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
});
