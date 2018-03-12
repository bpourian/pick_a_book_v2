import "phoenix_html";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from "axios";
import Book from "./components/book";
import Books from "./components/books";
import Home from "./components/home";
import LogIn from "./components/logIn";
import NewBook from "./components/newBook";
import SignUp from "./components/signUp";
import CommentBox from "./components/commentBox";

class Main extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Book} />
          <Route exact path="/books/new" component={NewBook} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/commentbox" component={CommentBox} />
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("main"));
