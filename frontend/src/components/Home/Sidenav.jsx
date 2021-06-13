import React from 'react';
import { Codemovment,av1,av2 } from '../../images/index';
import './Sidenav.css';

class Sidenav extends React.Component {
  render() {
    return (
      <div className='Sidenav_container'>
        <div className='codemovment_ares'>
          <img src={Codemovment} alt='code' className='code_' />
          <h1 className='codemovement_text'>Guyz do follow us on Discord</h1>
          <button className='code_button'>Follow</button>
        </div>
        <button className='contact_button'>Follow</button>
        <button className='about_button'>Follow</button>

        <div className='dev_area'>
          <div className='dev'>
            <img src={av1} alt='ballu' className='avatar' />
            <div className='dev_info_area'>
              <h1 className='dev_name'>Baljinder Singh</h1>
              <p>Backend /Frontend devloper</p>
            </div>
          </div>
          <div className='dev'>
            <img src={av2} alt='ballu' className='avatar' />
            <div className='dev_info_area'>
              <h1 className='dev_name'>Vanshaj Kaistha</h1>
              <p>Backend /Frontend devloper</p>
            </div>
          </div>
          <div className='dev'>
            <img src={av1} alt='ballu' className='avatar' />
            <div className='dev_info_area'>
              <h1 className='dev_name'>Saiyam Mahajan </h1>
              <p>Front End/Hosting</p>
            </div>
          </div>
          <div className='dev'>
            <img src={av2} alt='ballu' className='avatar' />
            <div className='dev_info_area'>
              <h1 className='dev_name'>Pulkit Arora</h1>
              <p>Frontend Devloper</p>
            </div>
          </div>
          <div className='dev'>
            <img src={av1} alt='ballu' className='avatar' />
            <div className='dev_info_area'>
              <h1 className='dev_name'>Shashwat Anand</h1>
              <p>Frontend/design</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Sidenav;
