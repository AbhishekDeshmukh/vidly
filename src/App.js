import React, { Component } from "react";
import Movies from "./components/Movies";
import "./App.css";
import NavBar from "./components/Navigation";
import { Route, Switch, Redirect } from "react-router-dom";
import Customers from "./components/Customers";
import Rentals from "./components/Rentals";
import NotFound from "./components/common/notFound";
import MovieForm from "./components/movieForm";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar></NavBar>
        <main className="container">
          <Switch>
            <Route path="/movies/:id" component={MovieForm}></Route>
            <Route path="/movies" component={Movies}></Route>
            <Route path="/customers" component={Customers}></Route>
            <Route path="/rentals" component={Rentals}></Route>
            <Route path="/not-found" component={NotFound}></Route>
            <Route path="/" exact component={Movies}></Route>
            <Redirect to="not-found"></Redirect>
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
