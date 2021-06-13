  
import React, { useEffect , useState } from 'react';
import "./PostItem.css";
import { fetchData } from '../../api';
import { Link } from "react-router-dom";

function PostItem({handlecomment}) {
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
    <>
      <h1 id='not_login'>LOGIN PLEASE</h1>
      <div className='post_home_area' id='allposts'>
        {fetchposts.map((posts) => (
          <div className='post'>
            <div className='post__right'>
              <span className='s1'>{posts.user}</span>
              <br></br>
              <span className='s2'>PostId:{posts.postId}</span>
              <br></br>
              <br></br>
              <h3 className='t1'>
                <u>{posts.postTitle}</u>
              </h3>
              <br></br>
              <span className='post__info'>{posts.postDesc}</span>
              <Link to='/comments'>
                <button
                  class='button'
                  onClick={(e) => handlecomment(e.target.value)}
                  value={posts.postId}>
                  Comment
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}


export default PostItem;
