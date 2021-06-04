import React from "react";
import "./post.css";
import { logo } from "../../images";

import { Button } from '@material-ui/core';
const post = () => {
    
      return (

   <div className='addBlog'>
        
            <img src={logo} alt="logo" className="photo" />
            <h1 className="name">Create Post</h1>
         
			<form>
				<div className='addBlog__details'>
					<h3 className="gg">Title:
			</h3>
					<center><input type='text' className="kk" placeholder="e.g Reddit"/></center>
<br></br>
					<h3>Content:</h3>
					<center><textarea className="se" type='text' placeholder="Write here......"/></center>

				</div>

				<center><Button variant='contained' type='submit' color='primary'>
					Submit
				</Button></center>
			</form>
		</div>
      )
    
}

export {post};

