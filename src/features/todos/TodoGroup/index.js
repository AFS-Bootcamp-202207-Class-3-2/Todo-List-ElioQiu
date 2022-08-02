import TodoItem from "../TodoItem";

export default function TodoGroup(props) {
  const { todos } = props;
  return (
    <div>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
}
