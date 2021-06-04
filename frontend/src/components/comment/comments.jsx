import React from "react";
import Header from "./nav";
import "./comments.css";
class comment extends React.Component {
    render() {
        return ( 
        <div className="total">
        <div className = "heading" >
        <Header />
        </div>
        <center>
        <div className="content">
            <div className="userId">
            <span>UserId</span> / <span>ID</span><br />
            </div>
            <div className="title">
           <span>Title</span><br />
           </div>
           <div className="desc">
           <span>Description:</span><br />
           </div>
           <div className="data">
           <span></span>
           </div>
           <br></br><br></br>
             <div className="commentkaro">
            <textarea className="comments">Comment........</textarea>
            
        </div>
        <div className="problem"><button className="submit007">Comment</button></div>
        </div>  
        </center>
        <center>
        <div className="showComments">
            <br />  
            <span>UserId</span> / <span>ID</span><br /> <br />
            <span className="comment_here">comment hai yahan</span>
        </div></center>
        </div>
        );
    }
}
export { comment };