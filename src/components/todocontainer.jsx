import React, { useState } from "react";
import InputTodo from "./input";

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
