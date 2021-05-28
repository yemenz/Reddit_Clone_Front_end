import React from "react";
import  {logo}  from "../../images";
import styles from "./register.module.css";
import {Button} from "@material-ui/core";
import {LockOpen} from '@material-ui/icons';
export class Register extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  
  render() {
    return (
      <div className={styles.base_container} >
        <h1 className={styles.header}>Register</h1>
        <div className={styles.content}>
          <div className={styles.image}>
            <img src={logo} alt="logo" className={styles.img} />
          </div>
          <div className={styles.form}>
            <div className={styles.form_group}>
              <label htmlFor="userid" className={styles.label}>UserId</label>
              <input type="text" name="userid" placeholder="eg:-example_1" className={styles.input} />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="username" className={styles.label}>Username</label>
              <input type="text" name="username" placeholder="eg: ken kaneki" className={styles.input} />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="password" className={styles.label}>Password</label>
              <input type="password" name="password" placeholder="password" className={styles.input} />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input type="text" name="email" placeholder="examle:-example@xyz.com" className={styles.input} />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="dob" className={styles.label}>Date of birth</label>
              <input type="date" name="dob" className={styles.input} />
            </div>
          </div>
          
        </div>
        <Button
        variant="contained"
        className={styles.button}
        color="secondary"
        endIcon={<LockOpen></LockOpen>}
        >Login</Button>
      </div>
    );
  }
}
