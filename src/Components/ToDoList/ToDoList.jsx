import React from "react";
import ToDoListItem from "./ToDoItem";
import PropTypes from "prop-types";

const TodoList = ({ items, onItemDelete, onToggleDone, onToggleImportant }) => {
  const listItems = items.map(item => {
    const { id, ...data } = item;
    return (
      <li key={id} className="list-group-item list-group-item-light">
        <ToDoListItem
          {...data}
          onDelete={() => onItemDelete(id)}
          onDone={() => onToggleDone(id)}
          onImportant={() => onToggleImportant(id)}
        />
      </li>
    );
  });

  return (
    <div className="row my-3">
      <div className="col-6 m-auto">
        <ul className="list-group">{listItems}</ul>
      </div>
    </div>
  );
};

TodoList.propTypes = {
  items: PropTypes.array.isRequired
};

export default TodoList;
