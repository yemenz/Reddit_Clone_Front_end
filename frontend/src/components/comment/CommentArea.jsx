import React,{ useEffect , useState } from "react";
import { fetchcommentData } from '../../api';
function CommentArea(){

    const [fetchcomments,setfetchcomments]=useState([]);

    useEffect(()=>{
        const fetchcmt=async ()=>
        {
            setfetchcomments(await fetchcommentData());
        }
        fetchcmt();
    },[])
    console.log(fetchcomments);

    
    return(
       
      
        <div className="showComments">
         {fetchcomments.map(comments=>(
        <div>
            <br />  
            <span>{comments.commentuserid}</span> / <span>{comments.commentid}</span><br /> <br />
            <span className="comment_here">{comments.commentdesc}</span>
            </div>
      ))}
      
     </div>
        
        )



    
 
}

export default CommentArea;