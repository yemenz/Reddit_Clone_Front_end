import React from 'react';
import { fetchcommentData, fetchData } from '../../api';

class CommentArea extends React.Component{

    state={
        data:[]
    }
    componentDidMount=async ()=>
    {
        const pid = sessionStorage.getItem("pid");
        const dt=await fetchcommentData(pid);
        //console.log(dt);
         this.setState({data:dt})
    }


    render()
    {
        const{data}=this.state
        return (
          <div className='showComments'>
            {data.map((c, i) => (
              <div key={i} className="comments_divo">
                <br />
                <span>{c.user}</span> / <span>{c.commentId}</span>
                <br /> <br />
                <span className='comment_here'>{c.comment}</span>
              </div>
            ))}
          </div>
        );
    }

}



// const CommentArea = ({ postid }) => {
//   const [fetchcomments, setfetchcomments] = useState({});
//   //setfetchcomments(async()=>
//   {
// const comments = await fetchcommentData(postid);
// return comments;
//   })
// let data=[];
//  //  fetchcomments.then((res) => {data=res});
//    console.log('datatatatata :' +  fetchcomments);

//   return (
//     <div className='showComments'>
//         {/* {
//             fetchcomments.then((res)=><div>{res}</div>)
//         } */}

//       {/* {fetchcomments.then((res)=>{ res.map((comments,i) => (
//         <div>
//           <br />
//           <span>{comments.user}</span> / <span>{comments.commentid}</span>
//           <br /> <br />
//           <span className='comment_here'>{comments.comment}</span>
//         </div>
//       ))})} */}
//     </div>
//   );
// };

export default CommentArea;
