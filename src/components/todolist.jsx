import React from "react";
import PropTypes from "prop-types";
import { useRecoilValue } from "recoil";
import { todoState } from "./recoil/stateManager";
import InputTodo from "./input";

const TodoList = (props) => {
  const todoList = useRecoilValue(todoState);
  return (
    <div>
      <InputTodo />
      {todoList.length > 0 ? (
        todoList.map((todo, index) => (
          // eslint-disable-next-line react/jsx-key
          <div>
            {todo}
            <button onClick={() => props.delTodos(index)}>delete</button>
          </div>
        ))
      ) : (
        <div> 님 백수임? </div>
      )}
    </div>
  );
};

export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  delTodos: PropTypes.func.isRequired,
};
