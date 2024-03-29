import React from "react";
import { useState } from "react";
import Form from "./Forms/Form";
import TodoList from "./TodoList";
import Footer from "./Footer/Footer";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState("");
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;

  return (
    <div>
      <Form todo={todo} setTodo={setTodo} todos={todos} setTodos={setTodos} error={error} setError={setError} />
      <TodoList
        todos={todos}
        setTodos={setTodos}
        todo={todo}
        setTodo={setTodo}
      />
      <Footer 
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      />
    </div>
  );
}
