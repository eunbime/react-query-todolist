import { useMutation } from "react-query";
import { addTodo, removeTodo, switchTodo } from "../api/todos";

const useTodosQuery = () => {
  const addMutation = useMutation(addTodo);

  const removeMutation = useMutation(removeTodo);

  const switchMutation = useMutation(switchTodo);

  return { addMutation, removeMutation, switchMutation };
};

export default useTodosQuery;
