import React from "react";
import  {logo}  from "../../images/";
import styles from "./login.module.css";
import {Button} from "@material-ui/core";
import {LockOpen} from '@material-ui/icons';



export class Login extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      // ref={this.props.containerRef}
      <div className={styles.base_container} >
        <h1 className={styles.header}>Login</h1>
        <div className={styles.content}>
          <div className={styles.image}>
            <img src={logo} alt="logo" className={styles.img} />
          </div>
          <div className={styles.form}>
            <div className={styles.form_group}>
              <label htmlFor="username" className={styles.label}>Username</label>
              <input type="text" name="username" placeholder="username" className={styles.input} />
            </div>
            <div className={styles.form_group}>
              <label htmlFor="password" className={styles.label}>Password</label>
              <input type="password" name="password" placeholder="password" className={styles.input} />
            </div>
          </div>
        </div>
        <Button
        variant="contained"
        color="secondary"
        endIcon={<LockOpen></LockOpen>}
        >Login</Button>
      </div>
      

    );
  }
}
