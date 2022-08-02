import "./index.css";
import { useDispatch } from "react-redux";
import { doneTodo, removeTodo } from "../todosSlice";


export default function TodoItem(props) {
  const { todo } = props;
  const dispatch = useDispatch();

  const onTodoDone = () => {
    dispatch(doneTodo(todo.id));
  }

  const onDeleteItem = () => {
    dispatch(removeTodo(todo.id));
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
