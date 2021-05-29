import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { Button } from "@material-ui/core";

// import LoginApp from "../login/AppLogin";

class Header extends React.Component {
 
  handleClick(){
    window.location=("/login");
  }
  handlePost(){
    window.location=("/post")
  }
  render(){
  return (
    
    <div className="header">
      <div className="header__left">
        <ul>
          <Link to="/popular" className="active">Popular</Link>
          <Link to="/hot">Hot</Link>
          <Link to="/rising">Rising</Link>
          <Link to="/controversial">Controversial</Link>
          <Link to="/top">Top</Link>
          <Link to="/gilded">Gilded</Link>
        </ul>
      </div>

      <div className="header__right">
      <Link to="/post" onClick={this.handlePost}>Create Post</Link>
      <Link to="/login" >
        <Button variant="outlined" onClick={this.handleClick} color="secondary">Log In</Button>
      </Link>
      <Link to="/login" >
      <Button variant="contained" onClick={this.handleClick} color="secondary">Sign Up</Button>
      </Link>
      
               

      </div>
    </div>
  );
  }
}

export default Header;
