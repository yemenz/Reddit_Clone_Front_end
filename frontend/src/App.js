import React from 'react';
import './App.css';
import AppLogin from './components/login/AppLogin';
import Post from './components/Post/post';
import Comment from './components/comment/Comments';
import Appmy from './components/Home/App';
import Navbar from "./components/Navbar/Navbar";
// import { BrowserRouter as Router} from "react-router-dom";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
class App extends React.Component {
  state={
    postid:""
  }

 
  handlecomment=(e)=>{
    this.setState({postid:e})
    window.location="./comments";
    console.log("this is post id  :"+e);
    }
  render() {
    const {postid}=this.state;
    return (
      <div>
        <Router>
          <Navbar />
          <Switch>

            <Route
              path='/login'
              component={() => <AppLogin login={'login'} />}
            />
            <Route
              path='/register'
              component={() => <AppLogin login={'signup'} />}
            />
            <Route
              path='/comments'
              component={() => <Comment postid={postid} />}
            />
            <Route path='/post' component={() => <Post />} />
            <Route
              path='/'
              component={() => <Appmy handlecomment={this.handlecomment} />}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
