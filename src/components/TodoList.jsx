import React from "react";
import Todoitem from "./Todoitem";
import styles from "./TodoList.module.css";
export default function TodoList({ todos, setTodos, todo, setTodo }) {
  const sortedTodos = todos
  .slice()
  .sort((a, b) => Number(a.done) - Number(b.done));
  return (
    <div className={styles.list}>
      {sortedTodos.map((id) => (
        <Todoitem
          key={id.name}
          id={id}
          todos={todos}
          setTodos={setTodos}
          todo={todo}
          setTodo={setTodo}
        />
      ))}
    </div>
  );
}
