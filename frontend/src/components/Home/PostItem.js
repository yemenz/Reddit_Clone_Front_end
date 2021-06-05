  
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
            
          <span >{posts.UserId}/</span>
          {/* ballu_1 */}
          <span>{posts.postId}</span>
          {/* 1 */}
          <h3>{posts.postTitle}</h3>
          {/* ballu wala title */}
          <span className="post__info">
            {posts.postDesc}

          </span><button onClick={this.handleclicko}>Comment</button>
      </div>
      
        ))}  
    </div>
  );
}

export default PostItem;
