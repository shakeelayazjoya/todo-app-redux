import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/todoSlice";

const TodoItem = ({ id, text, completed }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", alignItems: "center", margin: "10px 0" }}>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => dispatch(toggleTodo(id))}
      />
      <span
        style={{
          textDecoration: completed ? "line-through" : "none",
          marginLeft: "10px",
        }}
      >
        {text}
      </span>
      <button
        onClick={() => dispatch(deleteTodo(id))}
        style={{ marginLeft: "auto" }}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
