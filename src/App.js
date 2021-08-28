import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import JumbotronComponent from "./components/JumbotronComponent";
import NavbarComponent from "./components/NavbarComponent";
import CreateUserContainer from "./containers/CreateUserContainer";
import DetailUserContainer from "./containers/DetailUserContainer";
import EditUserContainer from "./containers/EditUserContainer";

import HomeContainer from "./containers/HomeContainer";

export default function App() {
  return (
    <div>
      <NavbarComponent />
      <JumbotronComponent />
      <Router>
        <Route path="/" exact>
          <HomeContainer />
        </Route>
        <Route path="/create">
          <CreateUserContainer />
        </Route>
        <Route path="/detail/:id">
          <DetailUserContainer />
        </Route>
        <Route path="/edit/:id">
          <EditUserContainer />
        </Route>
      </Router>
    </div>
  );
}
