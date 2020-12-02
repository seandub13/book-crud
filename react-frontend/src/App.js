import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddBook from "./components/add-book.component";
import Book from "./components/book.component";
import BookList from "./components/books-list.component";
import User from './components/user.component'
import UserList from './components/user-list.component'
import AddUser from './components/add-user.component'

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/books"} className="navbar-brand">
            BookLibrary WebApp
          </Link>
          <div className="navbar-nav mr-auto">
          <li className="nav-item">
              <Link to={"/users"} className="nav-link">
                Users
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add-user"} className="nav-link">
                Add User
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/books"} className="nav-link">
                My Books
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add Book
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/books"]} component={BookList} />
            <Route exact path="/add" component={AddBook} />
            <Route path="/books/:id" component={Book} /> 
            <Route path="/users/:id" component={User} />
            <Route path="/users" component={UserList} />
            <Route path="/add-user" component={AddUser} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;