import React from "react";
import "./App.css";
import SideNav from "./SideNav";
import Header from "./Header";
import Main from "./Main";
import Posts from "./Posts";
// import AppLogin from "./components/login/AppLogin";
// import { BrowserRouter as Router} from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom"
function App() {
  return (
    <div className="App container">
      <Router>
      
      
        <Main>
        <Header />
        
          <Posts />
        </Main>
      </Router>
    </div>
  );
}

export default App;
