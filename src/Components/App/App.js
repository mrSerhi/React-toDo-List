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

  render() {
    const { items } = this.state;
    return (
      <section className="todo-app">
        <div className="container">
          <HeaderBlock />

          <div className="row justify-content-center">
            <Search />
            <SortBlock />
          </div>

          <TodoList items={items} onItemDelete={this.handleItemDelete} />
          <ToDoForm />
        </div>
      </section>
    );
  }
}

export default App;
