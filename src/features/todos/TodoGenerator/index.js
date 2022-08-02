import "./index.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../todosSlice";

export default function TodoGenerator(props) {
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
    dispatch(addTodo(item.trim()))
    setItem("");
  };
  return (
    <div>
      <input
        type="text"
        value={item}
        onChange={onUpdateTodo}
        className="GeneratorInput"
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
