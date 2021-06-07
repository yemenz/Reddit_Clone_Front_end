import React from 'react';
import './App.css';

import AppLogin from './components/login/AppLogin';
import AppHome from './components/Home/App';
import Post from './components/Post/post';
import { fetchData } from './api';
import Comment from './components/comment/Comments';
import Appmy from './components/i_m_trying_home_page/App';

// import { BrowserRouter as Router} from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
class App extends React.Component {
  //   async componentDidMount(){
  //     const data= await fetchData();
  //     console.log("backend data= "+JSON.stringify(data));
  // }

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route path='/login' component={() => <AppLogin />} />
            <Route path='/comments' component={() => <Comment />} />
            <Route path='/post' component={() => <Post />} />
            <Route path='/myfile' component={() => <Appmy />} />
            <Route path='/' exact component={() => <AppHome />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
