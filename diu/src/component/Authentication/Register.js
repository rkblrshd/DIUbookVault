import React from "react";
import history from "../../helpers/history";
import axios from "axios";
class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      confirm_password: "",
      first_name: "",
      last_name: "",
      invalid: false
    };

    this.handleLoginButton = this.handleLoginButton.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }
  handleLoginButton = e => {
    e.preventDefault();
    history.push("/login");
  };

  handleOnChange = e => {
    const { name, value, checked } = e.target;
    this.setState({
      [name]: name === "check_box" ? checked : value
    });
  };

  getIdFromString() {
    const { email } = this.state;

    var userid = email.replace(/\D/g, "");
    return userid;
  }

  handleOnSubmit = e => {
    e.preventDefault();

    var check = this.state.email.includes("@diu.edu.bd");

    var check2 = this.state.email.includes(this.state.first_name.toLowerCase());

    var check3 = this.state.email.includes(this.state.last_name.toLowerCase());
    var check4 = this.state.email.split("-")[0].includes("15");

    if (check && (check2 || check3) && check4) {
      axios
        .post("http://localhost:3001/signup", {
          email: this.state.email,
          password: this.state.password,
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          userid: this.getIdFromString()
        })
        .then(res => {
          history.push("./login");
          this.setState({ invalid: "" });
        })
        .catch(err => console.log(err));
    } else {
      if (!check2 || !check3) {
        this.setState({
          invalid: "Email name doesn't match with first or last name"
        });
      } else {
        this.setState({
          invalid: "Email format is invalid. Ex: abc15-XXXX@diu.edu.bd"
        });
      }
    }
  };

  render() {
    const {
      email,
      password,
      confirm_password,
      first_name,
      last_name,
      check_box
    } = this.state;
    return (
      <div class="login-3 tab-box">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-7 col-md-12 col-pad-0 form-section">
              <div class="login-inner-form">
                <div class="details">
                  <a href="#">
                    <img src="./assets/images/logo.png" alt="logo" />
                  </a>
                  <h3>Create an account</h3>
                  <form>
                    <div class="form-group">
                      <input
                        type="text"
                        name="first_name"
                        class="input-text"
                        value={first_name}
                        onChange={this.handleOnChange}
                        placeholder="DIU First Name"
                      />
                    </div>

                    <div class="form-group">
                      <input
                        type="text"
                        name="last_name"
                        class="input-text"
                        value={last_name}
                        onChange={this.handleOnChange}
                        placeholder="DIU Last Name"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="email"
                        name="email"
                        class="input-text"
                        value={email}
                        placeholder="DIU Email Address"
                        onChange={this.handleOnChange}
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        name="password"
                        value={password}
                        class="input-text"
                        placeholder="Password"
                        onChange={this.handleOnChange}
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="password"
                        name="confirm_password"
                        value={confirm_password}
                        onChange={this.handleOnChange}
                        class="input-text"
                        placeholder="Confirm Password"
                      />
                    </div>
                    {(
                      <div>
                        <p class="text-success">
                          {this.state.invalid}
                        </p>
                      </div>
                    )}
                    <div class="form-group">
                      <button
                        type="submit"
                        class="btn-md btn-theme btn-block"
                        onClick={this.handleOnSubmit}
                      >
                        Login
                      </button>
                    </div>
                    <p class="none-2">
                      Already a member?<a href="login-3.html"> Login here</a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-lg-5 col-md-12 col-pad-0 bg-img none-992">
              <div class="informeson">
                <div class="btn-section">
                  <a
                    href="login-3.html"
                    class="link-btn"
                    onClick={this.handleLoginButton}
                  >
                    Login
                  </a>
                  <a href="#" class="link-btn active">
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
export default Register;
