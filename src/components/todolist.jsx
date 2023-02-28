import React from "react";
import PropTypes from "prop-types";
import { useRecoilState } from "recoil";
import { todoListState } from "./recoil/stateManager";

const TodoList = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const delTodo = (index) => {
    setTodoList((prev) => {
      const newTodoList = prev.filter((item, itemIndex) => {
        return itemIndex !== index;
      });
      return newTodoList;
    });
  };
  return (
    <div>
      {todoList.length > 0 ? (
        todoList.map((todo, index) => (
          // eslint-disable-next-line react/jsx-key
          <div key={todo.index}>
            {todo}
            <button onClick={() => delTodo(index)}>delete</button>
          </div>
        ))
      ) : (
        <div> plz to something </div>
      )}
    </div>
  );
};

export default TodoList;

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  delTodos: PropTypes.func.isRequired,
};
