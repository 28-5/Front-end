import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Login from "./components/Login/Login";
import Main from "./components/Main/Main";


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/" exact component={Main}/>
      </Switch>
    </Router>
  );
}

export default App;
