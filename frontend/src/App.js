import React from "react";
import "./App.css";

import AppLogin from "./components/login/AppLogin";
import AppHome from "./components/Home/App";
// import { BrowserRouter as Router} from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div >
      <Router>
      <Switch>
          <Route path="/login" exact component={() => <AppLogin />} />

          {/* <Route path="/login" exact component={() => <AppLogin />} /> */}

          <Route path="/" exact component={() => <AppHome />} />
        </Switch>
        </Router>
    </div>
  );
}

export default App;
