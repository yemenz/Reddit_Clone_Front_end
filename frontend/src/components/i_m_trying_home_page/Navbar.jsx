import React from 'react';
import redditlogo from '../../images/logo/redditlogo.png';
import './Navbar.css';
class Navbar extends React.Component {
  render() {
    return (
      <div className='Navbar_container'>
        <div className='Navbar_img_container'>
          <img className='Navbar_logo' alt='logo' src={redditlogo} />
        </div>
        <div className="Navbar_searchbar">
         </div>
      </div>
    );
  }
}

export default Navbar;
