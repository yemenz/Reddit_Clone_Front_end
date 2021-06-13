import React from "react";
import  {logo}  from "../../images";
import styles from "./login.module.css";
import {Button} from "@material-ui/core";
import {LockOpen} from '@material-ui/icons';
import axios from "axios";
import {url} from "../../api";


export class Login extends React.Component {
  
   state={
      username:"",
      password:""
    }

  
   handlechangedata=e=>{
   
   this.setState({[e.target.name]:e.target.value});
   

  }
  submitlogindata=(e)=>{
    e.preventDefault();
     const {username,password}=this.state;
    var logindata={
        "UserId":username,
        "password":password
    }
    axios.post(`${url}/user/signIn`,logindata)
    .then(res=>{
      console.log(res.data);
       if (res.data === false) {
         document.getElementById('registe_error').innerHTML =
           'user not Found';
       } else {
         alert('user logind succesfully');
         sessionStorage.setItem('uid', username);
         window.location = './';
       }
    })
    .catch(error=>{
      console.log(error);
    })
  }

  render() {
    

    return (
      <div className={styles.base_container} >
        <h1 className={styles.header}>Login</h1>
        <div className={styles.content}>
          <div className={styles.image}>
            <img src={logo} alt="logo" className={styles.img} />
          </div>
          <form className={styles.form} onSubmit={this.submitlogindata}>
            <div className={styles.form_group}>
              <label htmlFor="username" className={styles.label}>Username</label>
              <input type="text" name="username" placeholder="username" onChange={this.handlechangedata} className={styles.input} />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="password" className={styles.label}>Password</label>
              <input type="password" name="password" placeholder="password"  onChange={this.handlechangedata} className={styles.input} />
            </div>
            <Button type="submit"
        variant="contained"
        color="secondary"
        endIcon={<LockOpen></LockOpen>}
        >Login</Button>
          </form>
          
        </div>
      </div>
      

    );
  }
}
