import React from "react";
import { useRecoilState } from "recoil";
import todoState from "./stateManager";
import PropTypes from "prop-types";

const TodoItem = ({ todo }) => {
  const [todoList, setTodoList] = useRecoilState(todoState);

  const editItemText = ({ target: { value } }) => {
    const newList = todoList.map((listItem) =>
      listItem.id === todo.id ? { ...listItem, text: value } : listItem
    );
    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = todoList.map((listItem) =>
      listItem.id === todo.id
        ? { ...listItem, isComplete: !todo.isComplete }
        : listItem
    );

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = todoList.filter((listItem) => listItem.id !== todo.id);

    setTodoList(newList);
  };

  return (
    <div>
      <input type="text" value={todo.text} onChange={editItemText} />
      <input
        type="checkbox"
        checked={todo.isComplete}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
    </div>
  );
};

export default TodoItem;

TodoItem.propTypes = {
  todo: PropTypes.array.isRequired,
};
