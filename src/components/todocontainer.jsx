import React from "react";
import InputTodo from "./input";
import TodoListStats from "./recoil/todoliststats";
import TodoList from "./todolist";

export const TodoContainer = () => {
  return (
    <div>
      <InputTodo />
      <TodoList />
      <TodoListStats />
    </div>
  );
};
