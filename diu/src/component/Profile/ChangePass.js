import React from "react";
import TopNav from "../Layout/TopNav";
import Footer from "../Layout/Footer";
class ChangePass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      current_password: "",
      new_password: "",
      confirm_password: ""
    };
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleOnChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();
  };



  render() {
    const {
      current_password,
      new_password,
      confirm_password
    } = this.state;
    return (
      <div>
       
        <div class="row">
          <div class="col-lg-12">
            <div class="card card-dashboard">
              <div class="card-body">

                <form action="#">

                  <label>
                    Current password (leave blank to leave unchanged)
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    onChange={this.handleOnChange}
                    value={current_password}
                    name="current_password"
                  />

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
export default ChangePass;
