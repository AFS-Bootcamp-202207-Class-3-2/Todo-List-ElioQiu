import "./index.css";

export default function TodoItem(props) {
  const { text } = props.todo;
  return (
    <div>
      <input type="text" value={text} className="TodoItem" disabled />
    </div>
  );
}
