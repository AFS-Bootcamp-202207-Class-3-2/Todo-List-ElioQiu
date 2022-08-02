import "./index.css";

export default function TodoItem(props) {
  const { name } = props.todo;
  return (
    <div>
      <input type="text" value={name} className="TodoItem" disabled />
    </div>
  );
}
