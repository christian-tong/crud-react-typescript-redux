import { useAppDispatch } from "../hooks/store";
import { User, UserId, addNewUser, deleteUserById } from "./slice";

export const useUserACtions = () => {
  const dispatch = useAppDispatch();

  const addUser = ({ name, email, github }: User) => {
    dispatch(addNewUser({ name, email, github }));
  };
  const removeUser = (id: UserId) => {
    dispatch(deleteUserById(id));
  };

  return { addUser, removeUser };
};
