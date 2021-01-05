import React from "react";
import history from "../../helpers/history";
class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      remember_me: ""
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
    history.push("/home");
  };

  handleOnChange = e => {
    const { name, value,checked } = e.target;
    this.setState({
      [name]: name === "remember_me" ? checked : value,
    });
  };

  render() {
    const { props } = this.props;
    const { email, password, remember_me } = this.state;
    return (
      <div className="login-3 tab-box">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 col-md-12 col-pad-0 form-section">
              <div className="login-inner-form">
                <div className="details">
                  <a href="#">
                    <img src='./assets/images/logo.png' alt="logo"/>
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
                Good friends, good books, and a sleepy conscience: this is the ideal life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
