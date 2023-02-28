import React, { useState } from "react";
import PropTypes from "prop-types";
import { useSetRecoilState } from "recoil";
import { todoListState } from "./recoil/stateManager";

const InputTodo = () => {
  const [todo, setTodo] = useState("");
  const setTodoList = useSetRecoilState(todoListState);
  const handleTodo = (e) => setTodo(e.target.value);

  const addTodo = () => {
    setTodoList((prev) => {
      const newTodos = [...prev, todo];
      return newTodos;
    });
    setTodo("");
  };

  return (
    <div>
      <input
        value={todo}
        onChange={handleTodo}
        placeholder="add your job plz"
      />
      <button onClick={addTodo}>add</button>
    </div>
  );
};

export default InputTodo;

InputTodo.propTypes = {
  setTodos: PropTypes.func,
};
