import React from "react";
import "./App.css";

import AppLogin from "./components/login/AppLogin";
import AppHome from "./components/Home/App";
import {post} from "./components/Post/post";
import { fetchData } from './api';
import {comment} from "./components/comment/comments";

// import { BrowserRouter as Router} from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
class App extends React.Component {


//   async componentDidMount(){
//     const data= await fetchData();
//     console.log("backend data= "+JSON.stringify(data));
// }

  render(){return(
    <div >
      <Router>
      <Switch>
          <Route path="/login"  component={() => <AppLogin />} />
          <Route exact path="/comments" component={comment}/>

          <Route  path="/post" component={post}/>
          <Route path="/" exact component={() => <AppHome />} />
        </Switch>
        </Router>
    </div>
  );
}
}

export default App;
