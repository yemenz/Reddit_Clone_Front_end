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
					<h3 className="gg">Title</h3>
					<input type='text' placeholder="e.g Reddit"/>

					<h3>Content</h3>
					<textarea type='text' placeholder="Write here......"/>

				</div>

				<Button variant='contained' type='submit' color='primary'>
					Submit
				</Button>
			</form>
		</div>
      )
    
}

export {post};

