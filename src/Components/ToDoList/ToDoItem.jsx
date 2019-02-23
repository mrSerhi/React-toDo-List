import React from "react";
import "./todo-list.css";

//Font-awesome v5
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faStar);

const ToDoListItem = ({ item }) => {
  return (
    <div className=" d-flex flex-row justify-content-between align-items-center">
      <span>{item.value}</span>

      <div className="block">
        <button className="btn btn-outline-danger mr-1">
          <FontAwesomeIcon icon={faTrash} />
        </button>
        <button className="btn btn-outline-warning">
          <FontAwesomeIcon icon={faStar} />
        </button>
      </div>
    </div>
  );
};

export default ToDoListItem;
