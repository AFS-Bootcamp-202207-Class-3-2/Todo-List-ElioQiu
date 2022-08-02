import "./index.css";
import { useDispatch } from "react-redux";
import { doneTodo } from "../todosSlice";


export default function TodoItem(props) {
  const { todo } = props;
  const dispatch = useDispatch();

  const onTodoDone = () => {
    dispatch(doneTodo(todo.id));
  }

  return (
    <div>
      <div className={todo.done ? "TodoDoneItem" : "TodoItem"} onClick={onTodoDone}>
        {todo.text}
      </div>
    </div>
      
  );
}
