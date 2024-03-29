import React from "react";
import { useState } from "react";
import styles from "../Forms/Form.module.css";

export default function Form({ todos, setTodos, error, setError }) {
  const [todo, setTodo] = useState({ name: "", done: false});
 
  function handleSubmit(e) {
    e.preventDefault();
    const exists = todos.some((item) => item.name === todo.name);
    if (exists) {
      setError("Todo item with this name already exists!");
    } else {
      setTodos([...todos, todo]);
      setTodo({ name: "", done: false });
      setError("");
    }
  }

  return (
    <div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.container}>
          <input
            className={styles.input}
            onChange={(e) => setTodo({name:e.target.value, done: false})}
            value={todo.name}
            type="text"
            placeholder="Enter to do item..."
            required
          />
          <button className={styles.button} type="submit">
            Add
          </button>
        </div>
      </form>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
