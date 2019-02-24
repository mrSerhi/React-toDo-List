import React, { Component } from "react";
import "./todo-list.css";

//Font-awesome v5
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faTrash, faStar);

class ToDoListItem extends Component {
  state = {
    done: this.props.done,
    important: this.props.important
  };

  handleItemDone = () => {
    this.setState(({ done }) => {
      return { done: !done };
    });
  };

  handleItemImportant = () => {
    this.setState(({ important }) => {
      return { important: !important };
    });
  };

  render() {
    const { value } = this.props;
    const { done: isDone, important: Isimportant } = this.state;
    const importantClassNames = Isimportant
      ? "todo-item important"
      : "todo-item";
    let defaultItemClasses =
      "d-flex flex-row justify-content-between align-items-center ";
    const doneClassNames = isDone
      ? defaultItemClasses + "done"
      : defaultItemClasses;

    return (
      <div className={doneClassNames}>
        <span onClick={this.handleItemDone} className={importantClassNames}>
          {value}
        </span>

        <div className="block">
          <button className="btn btn-outline-danger mr-1">
            <FontAwesomeIcon icon={faTrash} />
          </button>
          <button
            onClick={this.handleItemImportant}
            className="btn btn-outline-warning"
          >
            <FontAwesomeIcon icon={faStar} />
          </button>
        </div>
      </div>
    );
  }
}

export default ToDoListItem;
