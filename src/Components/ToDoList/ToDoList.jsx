import React from "react";
import ToDoListItem from "./ToDoItem";
import PropTypes from "prop-types";

const TodoList = ({ items }) => {
  const listItems = items.map(item => {
    return (
      <li key={item.id} className="list-group-item list-group-item-light">
        <ToDoListItem {...item} />
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
