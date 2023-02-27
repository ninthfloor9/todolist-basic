import React, { useEffect, useState } from "react";
import InputTodo from "./input";
import TodoList from "./todolist";

export const TodoContainer = () => {
  const [todos, setTodos] = useState([]);
  const delTodos = (index) => {
    setTodos((prev) => {
      const newTodos = prev.filter((prev, ind) => ind !== index);
      localStorage.setItem("todos", JSON.stringify(newTodos));
      return newTodos;
    });
  };

  useEffect(() => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos));
    }
  }, []);

  return (
    <div>
      <InputTodo setTodos={setTodos} />
      <TodoList todos={todos} delTodos={delTodos} />
    </div>
  );
};
