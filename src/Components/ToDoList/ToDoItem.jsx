import React from "react";
import "./todo-list.css";

//Font-awesome v5
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faStar);

const ToDoListItem = ({
  value,
  done: isDone,
  important: isImportant,
  onDelete,
  onDone,
  onImportant
}) => {
  const importantClassNames = isImportant ? "todo-item important" : "todo-item";
  let defaultItemClasses =
    "d-flex flex-row justify-content-between align-items-center ";
  const doneClassNames = isDone
    ? defaultItemClasses + "done"
    : defaultItemClasses;

  return (
    <div className={doneClassNames}>
      <span onClick={onDone} className={importantClassNames}>
        {value}
      </span>

      <div className="block">
        <button onClick={onDelete} className="btn btn-outline-danger mr-1">
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button onClick={onImportant} className="btn btn-outline-warning">
          <FontAwesomeIcon icon={faStar} />
        </button>
      </div>
    </div>
  );
};

export default ToDoListItem;
