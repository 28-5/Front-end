import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";
import Join from "./components/Join/Join";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
          <Route path="/" exact component={Main}/>
          <Route path="/login" component={Login}/>
          <Route path="/create" component={Join}/>
      </Switch>
    </Router>
  );
}

export default App;
