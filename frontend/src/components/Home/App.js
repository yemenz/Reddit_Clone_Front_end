import React,{useEffect} from 'react';
import Sidenav from "./Sidenav"
import PostItem from "./PostItem";
import "./App.css"
const App=({handlecomment})=> {
  useEffect(()=>
   {
     const uid = sessionStorage.getItem('uid');
     if (uid === null) {
      //  document.getElementById('login_signout').style.display = 'flex';
      //  document.getElementById('logoutbtn').style.display = 'none';
       document.getElementById('allposts').style.display = 'none';
       document.getElementById('not_login').style.display = 'block';
     } else {
      //  document.getElementById('login_signout').style.display = 'none';
      //  document.getElementById('logoutbtn').style.display = 'block';
        document.getElementById('allposts').style.display = 'block';
       document.getElementById('not_login').style.display = 'none';
     }
   });
  return (
    <div className='Home_div'>
      
      <Sidenav />
      <PostItem handlecomment={(e)=>handlecomment(e)} />
    </div>
  );
}

export default App;