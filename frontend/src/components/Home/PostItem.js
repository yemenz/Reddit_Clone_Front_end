  
import React, { useEffect , useState } from 'react';
import "./PostItem.css";
import { fetchData } from '../../api';

function PostItem() {
  const [fetchposts,setfetchposts]=useState([]);

    useEffect(()=>{
        const fetchpost=async ()=>
        {
            setfetchposts(await fetchData());
        }
        fetchpost();
    },[])
    console.log(fetchposts);
  return (
    <div>
        {fetchposts.map(posts=>(
          <div className="post">
         <div className="post__right">
          <span>{posts.UserId}/</span>
          <span>{posts.postId}</span>
          <h3>{posts.postTitle}</h3>
          <span className="post__info">
            {posts.postDesc}
          </span><button>Comment</button>
      </div>
      </div>
        ))}  
    </div>
  );
}

export default PostItem;
