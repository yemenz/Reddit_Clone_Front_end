import React from 'react';
import redditlogo from '../../images/logo/redditlogo.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
   componentDidMount()
  {
    const uid=sessionStorage.getItem("uid");
    if(uid===null)
    {
      document.getElementById('login_signout').style.display = 'flex';
      document.getElementById('logoutbtn').style.display="none";
      // document.getElementById('allposts').style.display = 'none';
      // document.getElementById('not_login').style.display = 'block';
      
    }
    else{
          document.getElementById('login_signout').style.display = 'none';
          document.getElementById('logoutbtn').style.display = 'flex';
          //  document.getElementById('allposts').style.display = 'block';
            // document.getElementById('not_login').style.display = 'none';
    }
  }

  handlelogout=()=>{
    document.getElementById("login_signout").style.display="flex";
    document.getElementById('logoutbtn').style.display="none";
    window.location="./";
    sessionStorage.clear();
  }
  render() {
    return (
      <div className='Navbar_container'>
        <div className='Navbar_img_container'>
          <img className='Navbar_logo' alt='logo' src={redditlogo} />
        </div>
        <div className='Navbar_searchbar'>
          <img
            alt='search'
            className='searchicon'
            src='https://img.icons8.com/color/35/000000/search--v1.png'
          />
          <input type='text' className='searchbar' placeholder='Search...' />
        </div>
        <div className='Navbar_login_signup' id='login_signout'>
          <Link to='/login'>
            <button className='navbar_login'>Login</button>
          </Link>
          <Link to='/register'>
            <button className='navbar_signup'>Signup</button>
          </Link>
        </div>
        <div className='Navbar_login_signup' id='logoutbtn'>
          <button className='navbar_lout' onClick={this.handlelogout}>
            Logout
          </button>
          <Link to='/post'>
            <button className='navbar_cp'>Create post</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Navbar;
