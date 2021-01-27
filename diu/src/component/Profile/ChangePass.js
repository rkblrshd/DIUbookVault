import React from "react";
import TopNav from "../Layout/TopNav";
import Footer from "../Layout/Footer";
import axios from "axios";
import { connect } from "react-redux";
import { userActions } from "../../store/actions/userAction";
class ChangePass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      new_password: "",
      confirm_password: "",
      success: false
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  componentWillUnmount() {
    this.setState({ success: false });
  }
  handleOnSubmit = e => {
    e.preventDefault();

    if (this.state.new_password === this.state.confirm_password) {
      axios
        .post("http://localhost:3001/changepass", {
          password: this.state.new_password,
          userid: this.props.userDetails.userid
        })
        .then(res => {
          this.props.update(res.data);
          this.setState({ success: true });
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    const { new_password, confirm_password } = this.state;
    return (
      <div>
        <div class="row">
          <div class="col-lg-12">
            <div class="card card-dashboard">
              <div class="card-body">
                <form action="#">
                  <label>New password (leave blank to leave unchanged)</label>
                  <input
                    type="password"
                    class="form-control"
                    onChange={this.handleOnChange}
                    value={new_password}
                    name="new_password"
                  />

                  <label>Confirm new password</label>
                  <input
                    type="password"
                    onChange={this.handleOnChange}
                    class="form-control mb-2"
                    value={confirm_password}
                    name="confirm_password"
                  />
                  {this.state.success && (
                    <p class="text-success">
                      Password has been updated.
                    </p>
                  )}
                  <button
                    type="submit"
                    class="btn btn-outline-primary-2"
                    onClick={this.handleOnSubmit}
                  >
                    <span>SAVE CHANGES</span>
                    <i class="icon-long-arrow-right"></i>
                  </button>
                </form>
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
  update: userActions.update
};
export default connect(mapState, actionCreators)(ChangePass);
