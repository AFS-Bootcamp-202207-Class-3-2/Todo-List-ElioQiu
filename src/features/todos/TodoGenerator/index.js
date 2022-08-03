import "./index.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../todosSlice";
import {saveTodo} from "../../../api/todos";

export default function TodoGenerator() {
  const [item, setItem] = useState("");
  const dispatch = useDispatch();

  const onUpdateTodo = (event) => {
    setItem(event.target.value);
  };

  const onAddTodo = () => {
    if (item.trim() === "") {
      alert("输入不能为空");
      return;
    }
    saveTodo(item.trim()).then(response => {
      dispatch(addTodo(response.data))
      setItem("");
    })
  };
  return (
    <div className="TodoGenerator">
      <input
        type="text"
        value={item}
        onChange={onUpdateTodo}
        className="GeneratorInput"
        placeholder="Input your todo then enter"
      />
      <input
        type="button"
        value="add"
        onClick={onAddTodo}
        className="AddButton"
      />
    </div>
  );
}
