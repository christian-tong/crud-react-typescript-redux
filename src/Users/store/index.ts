import { Middleware, configureStore } from "@reduxjs/toolkit";
import userSlice, { rollbackUser } from "./slice";
import { toast } from "sonner";

const persistanceLocalStorageMiddleware: Middleware =
  (store) => (next) => (action) => {
    next(action);
    localStorage.setItem("__redux__state__", JSON.stringify(store.getState()));
  };

const syncWithDatabaseMiddleware: Middleware =
  (store) => (next) => (action) => {
    const { type, payload } = action;
    const previousState = store.getState();
    next(action);
    if (type === "users/deleteUserById") {
      const userToRemove = previousState.users.find(
        (user) => user.id === payload
      );
      fetch(`https://jsonplaceholder.typicode.com/users/${payload}}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            toast.success(`Usuario ${payload} borrado correctamente`);
          }
        })
        .catch((error) => {
          if (userToRemove) {
            store.dispatch(rollbackUser(userToRemove));
          }
          toast.error(`Error al eliminar al usuario ${payload}`, error);
        });
    }
  };

export const store = configureStore({
  reducer: { users: userSlice },
  middleware: [persistanceLocalStorageMiddleware, syncWithDatabaseMiddleware],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
