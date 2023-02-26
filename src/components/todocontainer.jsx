import React, { useState } from "react";
import InputTodo from "./input";
import TodoList from "./todolist";

export const TodoContainer = () => {
  const [todos, setTodos] = useState([]);
  const delTodos = (index) => {
    setTodos((prev) => {
      return prev.filter((prev, ind) => ind !== index);
    });
  };

  return (
    <div>
      <InputTodo setTodos={setTodos} />
      <TodoList todos={todos} delTodos={delTodos} />
    </div>
  );
};
