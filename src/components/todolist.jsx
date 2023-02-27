import React from "react";
import PropTypes from "prop-types";

const TodoList = (props) => {
  return (
    <div>
      {props.todos.length > 0 ? (
        props.todos.map((todo, index) => (
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
