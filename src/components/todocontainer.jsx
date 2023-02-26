import React, { useState } from "react";

export const TodoContainer = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const handleTodo = (e) => setTodo(e.target.value);
  const addTodo = () => {
    setTodos((prev) => {
      return [...prev, todo];
    });
    setTodo("");
  };
  const delTodos = (index) => {
    setTodos((prev) => {
      return prev.filter((prev, ind) => ind !== index);
    });
  };

  return (
    <div>
      <div>
        <input
          value={todo}
          onChange={handleTodo}
          placeholder="add your job plz"
        />
        <button onClick={addTodo}>add</button>
      </div>
      <div>
        {todos.length > 0 ? (
          todos.map((todo, index) => (
            // eslint-disable-next-line react/jsx-key
            <div>
              {todo}
              <button onClick={() => delTodos(index)}>delete</button>
            </div>
          ))
        ) : (
          <div> 님 백수임? </div>
        )}
      </div>
    </div>
  );
};
