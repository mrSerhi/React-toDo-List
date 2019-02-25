import React, { Component } from "react";
// Components
import HeaderBlock from "../HeadBlock/HeadBlock";
import Search from "../Search/Search";
import SortBlock from "../SortButtonsSide/SortBtn";
import TodoList from "../ToDoList/ToDoList";
import ToDoForm from "../ToDoForm/ToDoForm";

//Font-awesome v5
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faIgloo } from '@fortawesome/free-solid-svg-icons'
// library.add(faIgloo)

class App extends Component {
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

  handleItemDelete = id => {
    this.setState(({ items }) => {
      const itemsShallCopy = [...items];
      const sortedItems = itemsShallCopy.filter(item => item.id !== id);

      return { items: sortedItems };
    });
  };

  handleItemAdd = () => {
    const item = {
      id: Date.now() + Math.random(),
      value: `I'm the new item`,
      done: false,
      important: false
    };

    this.setState(({ items }) => {
      const shallCopy = [...items, item];
      return { items: shallCopy };
    });
  };

  // id - current item id
  // stateObj - current state obj which will be updated
  // stateValue - current value of state object
  updateToggledItems = (id, stateObj, stateValue) => {
    const shallCopy = [...stateObj];
    const index = shallCopy.findIndex(item => item.id === id);
    shallCopy[index] = {
      ...shallCopy[index],
      [stateValue]: !shallCopy[index][stateValue]
    };
    return shallCopy;
  };

  handleToggleDone = id => {
    this.setState(({ items }) => {
      const mutedStateObj = this.updateToggledItems(id, items, "done");
      return { items: mutedStateObj };
    });
  };

  handleToggleImportant = id => {
    this.setState(({ items }) => {
      const mutedStateObj = this.updateToggledItems(id, items, "important");
      return { items: mutedStateObj };
    });
  };

  render() {
    const { items } = this.state;
    const itemsDoneLength = items.filter(item => item.done).length;
    const itemsLength = items.length - itemsDoneLength;

    return (
      <section className="todo-app">
        <div className="container">
          <HeaderBlock allToDo={itemsLength} doneToDo={itemsDoneLength} />

          <div className="row justify-content-center">
            <Search />
            <SortBlock />
          </div>

          <TodoList
            items={items}
            onItemDelete={this.handleItemDelete}
            onToggleDone={this.handleToggleDone}
            onToggleImportant={this.handleToggleImportant}
          />
          <ToDoForm />
          <button
            onClick={this.handleItemAdd}
            className="btn btn-primary btn-block w-25 mt-3 mx-auto"
          >
            Add
          </button>
        </div>
      </section>
    );
  }
}

export default App;
