import React from 'react';
import { logo } from '../../images';
import styles from './register.module.css';
import { Button } from '@material-ui/core';
import { LockOpen } from '@material-ui/icons';
import axios from 'axios';
import { url } from '../../api';
export class Register extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  state = {
    userid: '',
    username: '',
    password: '',
    email: '',
    dob: '',
  };

  handlechangedata = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitdata = (e) => {
    e.preventDefault();
    const { userid, username, password, email, dob } = this.state;
    var logindata = {
      UserId: userid,
      userName: username,
      password: password,
      email: email,
      DOB: dob,
    };
    axios
      .post(`${url}/user/create/`, logindata)
      .then((res) => {
        console.log(res.data);
        if (res.data === false) {
          document.getElementById('registe_error').innerHTML =
            'user not registred';
        } else {
          alert('User registered succesfully');
          sessionStorage.setItem('uid', res.data);
          window.location = './';
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className={styles.base_container}>
        <h1 className={styles.header}>Register</h1>
        <div className={styles.content}>
          <div className={styles.image}>
            <img src={logo} alt='logo' className={styles.img} />
          </div>
          <form className={styles.form} onSubmit={this.submitdata}>
            <div className={styles.form_group}>
              <label htmlFor='userid' className={styles.label}>
                UserId
              </label>
              <input
                type='text'
                name='userid'
                placeholder='eg:-example_1'
                onChange={this.handlechangedata}
                className={styles.input}
              />
            </div>
            <div className={styles.form_group}>
              <label htmlFor='username' className={styles.label}>
                Username
              </label>
              <input
                type='text'
                name='username'
                placeholder='eg: ken kaneki'
                onChange={this.handlechangedata}
                className={styles.input}
              />
            </div>
            <div className={styles.form_group}>
              <label htmlFor='password' className={styles.label}>
                Password
              </label>
              <input
                type='password'
                name='password'
                placeholder='password'
                onChange={this.handlechangedata}
                className={styles.input}
              />
            </div>
            <div className={styles.form_group}>
              <label htmlFor='email' className={styles.label}>
                Email
              </label>
              <input
                type='text'
                name='email'
                placeholder='examle:-example@xyz.com'
                onChange={this.handlechangedata}
                className={styles.input}
              />
            </div>
            <div className={styles.form_group}>
              <label htmlFor='dob' className={styles.label}>
                Date of birth
              </label>
              <input
                type='date'
                name='dob'
                onChange={this.handlechangedata}
                className={styles.input}
              />
            </div>
            <h3 id='registe_error'></h3>
            <Button
              type='submit'
              variant='contained'
              className={styles.button}
              color='secondary'
              endIcon={<LockOpen></LockOpen>}>
              Login
            </Button>
          </form>
        </div>
      </div>
    );
  }
}
