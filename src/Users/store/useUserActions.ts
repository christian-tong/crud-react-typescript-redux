import { useAppDispatch } from "../hooks/store";
import { UserId, deleteUserById } from "./slice";

export const useUserACtions = () => {
  const dispatch = useAppDispatch();

  const removeUser = (id: UserId) => {
    dispatch(deleteUserById(id));
  };

  return { removeUser };
};
