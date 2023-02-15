import React from "react";
import Sidebar from "../header&sidebar/Sidebar";
import Home from "../pages/home/Home";
import { Switch, Route } from "react-router-dom";

const App = () => {
  return <>
    <div className="setdisplay">
      <Sidebar />
      <Switch>
        <Route path="/app/home">
          <Home />
        </Route>
      </Switch>
    </div>
  </>;
};

export default App;
