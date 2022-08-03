import "./index.css";
import { useDispatch } from "react-redux";
import { doneTodo, removeTodo } from "../todosSlice";
import {deleteTodo, updateTodo} from "../../../api/todos";


export default function TodoItem(props) {
  const { todo } = props;
  const dispatch = useDispatch();

  const onTodoDone = () => {
      updateTodo(todo).then(response => {
          dispatch(doneTodo(response.data));
      })
  }

  const onDeleteItem = () => {
      deleteTodo(todo).then(response => {
          dispatch(removeTodo(response.data));
      })
  }

  return (
    <div className="TodoItem">
      <span className={todo.done ? "Done" : ""} onClick={onTodoDone}>
        {todo.text}
      </span>
      <span onClick={onDeleteItem}>
        x
      </span>
    </div>
  );
}
