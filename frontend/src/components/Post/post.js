import React from "react";
import "./post.css";
import { logo } from "../../images";
import { Button } from '@material-ui/core';
import {url} from "../../api";
import axios from "axios";
class post extends React.Component {

	state={
		postTitle:"",
		postDesc:""
	  }
  
	
	 handlechangedata=e=>{
	 
	 this.setState({[e.target.name]:e.target.value});
	 
  
	}
	submitdata=(e)=>{
	  e.preventDefault();
	   const {postTitle,postDesc}=this.state;
	  var logindata={
			"postTitle":postTitle,
			"postDesc":postDesc	
	  }
	  const user=sessionStorage.getItem("uid");
	  axios.post(`${url}/post/${user}/create`,logindata)
	  .then(res=>{
		console.log(res.data);
		if(res.data===null)
		{
			alert.apply("not posted")
		}
		else{
			alert("done");
			window.location="./"
		}
	  })
	  .catch(error=>{
		console.log(error);
	  })
	}
  




render(){
      return (

   <div className='addBlog'>
        
            <img src={logo} alt="logo" className="photo" />
            <h1 className="name">Create Post</h1>
         
			<form onSubmit={this.submitdata}>
				<div className='addBlog__details'>
					<h3 className="gg">Title</h3>
					<input type='text' name="postTitle" onChange={this.handlechangedata} placeholder="e.g Reddit"/>

					<h3>Content</h3>
					<textarea type='text' name="postDesc" onChange={this.handlechangedata} placeholder="Write here......"/>

				</div>

				<center><Button variant='contained' type='submit' color='primary'>
					Submit
				</Button></center>
			</form>
		</div>
      )
    

	}
}
export default post;

