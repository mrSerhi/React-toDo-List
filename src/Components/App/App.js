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
  render() {
    return (
      <section className="todo-app">
        <div className="container">
          <HeaderBlock />

          <div className="row justify-content-center">
            <Search />
            <SortBlock />
          </div>

          <TodoList />
          <ToDoForm />
        </div>
      </section>
    );
  }
}

export default App;
