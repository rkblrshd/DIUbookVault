import React from "react";
import history from "../../helpers/history";
import axios from "axios";
import { connect } from "react-redux";
import { userActions } from "../../store/actions/userAction";
class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      remember_me: "",
      invalid: false
    };

    this.handleRegisterButton = this.handleRegisterButton.bind(this);
    this.login = this.login.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleRegisterButton = e => {
    e.preventDefault();
    history.push("/register");
  };

  login = e => {
    e.preventDefault();
    let formData = new FormData();
    axios
      .post("http://localhost:3001/login", {
        email: this.state.email,
        password: this.state.password
      })
      .then(res => {
        if (res.data.length > 0) {
          this.props.login(res.data[0]);
          this.setState({ invalid: false });
          history.push("/home");
        } else {
          console.log(res);
          this.setState({ invalid: true });
        }
      })
      .catch(err => console.log(err));
  };

  handleOnChange = e => {
    const { name, value, checked } = e.target;
    this.setState({
      [name]: name === "remember_me" ? checked : value
    });
  };

  render() {
    const { userDetails } = this.props;
    console.log(userDetails);
    const { email, password, remember_me } = this.state;
    return (
      <div className="login-3 tab-box">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-pad-0 form-section">
              <div className="login-inner-form">
                <div className="details">
                  <a href="#">
                    <img src="./assets/images/logo.png" alt="logo" />
                  </a>
                  <h3>Sign into your account</h3>
                  <form>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        value={email}
                        className="input-text"
                        placeholder="Email Address"
                        onChange={this.handleOnChange}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="password"
                        name="password"
                        className="input-text"
                        placeholder="Password"
                        value={password}
                        onChange={this.handleOnChange}
                      />
                    </div>
                    <div className="checkbox clearfix">
                      <div className="form-check checkbox-theme d-inline-block ">
                        <input
                          type="checkbox"
                          className="custom-control-input mt-5"
                          id="remember_me"
                          name="remember_me"
                          value={remember_me}
                          onChange={this.handleOnChange}
                        />
                        <label class="form-check-label pb-" for="remember_me">
                          Remember Me
                        </label>
                      </div>
                      <a href="forgot-password-3.html">Forgot Password</a>
                    </div>
                    {this.state.invalid && (
                      <div className='mt-4 mb-4'>
                        <p class="text-success">Invalid Credential</p>
                      </div>
                    )}
                    <div className="form-group">
                      <button
                        type="submit"
                        className="btn-md btn-theme btn-block"
                        onClick={this.login}
                      >
                        Login
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-md-12 col-pad-0 bg-img none-992">
              <div className="informeson">
                <div className="btn-section">
                  <a href="#" className="active link-btn">
                    Login
                  </a>
                  <a
                    href="register-3.html"
                    className="link-btn"
                    onClick={this.handleRegisterButton}
                  >
                    Register
                  </a>
                </div>
                <h3>DIU BOOK VAULT</h3>
                <p>
                  Good friends, good books, and a sleepy conscience: this is the
                  ideal life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapState(state) {
  const { userDetails } = state.userInfo;
  return { userDetails };
}

const actionCreators = {
  login: userActions.login
};
export default connect(mapState, actionCreators)(Login);
