import React from "react";
import Header from "./nav";
import "./comments.css";
import CommentArea from "./CommentArea";
import {feathpostdata} from "../../api/index";
class Comment extends React.Component {

    state={
        posttitle:"",
        postdesc:"",
        postuserid:"",
        postpostid:0

    }

    componentDidMount=async ()=>{
        const data=await feathpostdata();
        console.log(data)
        this.setState({posttitle:data.postTitle,postdesc:data.postDesc,postuserid:data.user,postpostid:data.postId})
    }
    

    render() {
        const {posttitle,postdesc,postuserid,postpostid} =this.state
        return ( 
        <div className="total">
        <div className = "heading" >
        <Header />
        </div>
        <center>
        <div className="content">
            <div className="userId">
            <span>{postuserid}</span> / <span>{postpostid}</span><br />
            </div>
            <div className="title">
           <span>{posttitle}</span><br />
           </div>
           <div className="desc">
           <span>Description:</span><br />
           </div>
           <div className="data">
           <span>{postdesc}</span>
           </div>
           <br></br><br></br>
           <div className="commentkaro">
            <textarea className="comments">Comment........</textarea>
            
        </div>
        <div className="problem"><button className="submit007">Comment</button></div>

             
        </div>  
        </center>
        <center>
        <CommentArea />
        </center>
        </div>
        );
    }
}

export default Comment ;