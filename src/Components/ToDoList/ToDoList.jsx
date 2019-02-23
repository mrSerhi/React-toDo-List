import React, { Component } from "react";
import ToDoListItem from "./ToDoItem";

class TodoList extends Component {
  state = {
    items: [
      {
        id: "22l3l2",
        value: "create react app",
        done: false,
        important: false
      },
      {
        id: "22vvvx3l2",
        value: "clean my room",
        done: false,
        important: false
      },
      {
        id: "dfgfgt44",
        value: "read the newspeaper",
        done: false,
        important: false
      }
    ]
  };
  render() {
    const { items } = this.state;

    return (
      <React.Fragment>
        <div className="row my-3">
          <div className="col-6 m-auto">
            <ul className="list-group">
              {items.map(item => {
                return (
                  <li className="list-group-item list-group-item-light text-dark">
                    <ToDoListItem key={item.id} item={item} />
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TodoList;
