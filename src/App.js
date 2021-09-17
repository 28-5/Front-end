import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import Join from "./components/Join/Join";
import Dashboard from "./components/Admin/Dashboard";
import ShoppingRouter from "./components/Shopping/ShoppingRouter";


function App() {

  return (
    <Router>
      <Switch>
          <Route path="/" exact component={Main}/>
          <Route path="/member/login" component={Login}/>
          <Route path="/member/register" component={Join}/>
          <Route path="/shop" component={ShoppingRouter}/>
          <Route path="/admin" component={Dashboard}/>
      </Switch>
    </Router>
  );
}

export default App;
