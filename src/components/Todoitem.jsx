import React from "react";
import styles from "./TodoItem.module.css";

export default function Todoitem({ id, todos, setTodos, todo }) {
  function handleDelete(id) {
    console.log("Clicked on TodoItem clicked on", id);
    setTodos(todos.filter((todo) => todo !== id));
  }
  function handleClick(name) {
    setTodos(todos.map((todo) =>
    todo.name === name ? { ...todo, done: !todo.done } : todo
  ));
  }
  const className = id.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={()=> handleClick(id.name)}>{id.name}</span>
        <span>
          <button
            onClick={() => handleDelete(id)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
