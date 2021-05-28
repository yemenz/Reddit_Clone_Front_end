import React from "react";
import styles from  "./AppLogin.module.css";
import   "./extra.css";
import { Login, Register } from "./maping";
class LoginApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }

  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right_login");
  }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right_login");
      this.rightSide.classList.add("left_login");
    } else {
      this.rightSide.classList.remove("left_login");
      this.rightSide.classList.add("right_login");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
    return (
      <div className={styles.App}>
        <div className={styles.login}>
          <div className={styles.container} ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Login containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Register containerRef={ref => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const RightSide = props => {
  return (
    
      <div
      className={styles.right_side}
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className={styles.inner_container}>
        <div className={styles.text}>{props.current}</div>
      </div>
    
    </div>

      
    
  );
};

export default LoginApp;
