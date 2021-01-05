import React from "react";
import TopNav from "../Layout/TopNav";
import Footer from "../Layout/Footer";
class Address extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      first_name: "",
      last_name: "",
      address: "",
      apartment: "",
      town: "",
      district: "",
      postCode: "",
      phone_number: "",
      email: "",
      isToggle:false
    };

    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.toggle = this.toggle.bind(this)
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

  toggle = e => {
    e.preventDefault();
    const {isToggle} = this.state
    this.setState({isToggle:!isToggle})
  };

  

  render() {
    const {
      first_name,
      last_name,
      address,
      apartment,
      town,
      district,
      phone_number,
      postCode,
      isToggle
    } = this.state;
    return (
      <div>
        <p>
          The following addresses will be used on the checkout page by default.
        </p>
        <div class="row">
          <div class="col-lg-12">
            <div class="card card-dashboard">
              <div class="card-body">
                <h3 class="card-title">Billing Address</h3>

                <form action="#">
                  <div class="row">
                    <div class="col-sm-6">
                      <label>First Name *</label>
                      <input
                        type="text"
                        class="form-control"
                        required
                        name="first_name"
                        value={first_name}
                        onChange={this.handleOnChange}
                        readOnly={!isToggle}
                      />
                    </div>

                    <div class="col-sm-6">
                      <label>Last Name *</label>
                      <input
                        type="text"
                        class="form-control"
                        required
                        value={last_name}
                        name="last_name"
                        onChange={this.handleOnChange}
                        readOnly={!isToggle}
                      />
                    </div>
                  </div>
          
                  <label>Address *</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Address"
                    required
                    name="address"
                    value={address}
                    onChange={this.handleOnChange}
                    readOnly={!isToggle}
                  />
                  <input
                    type="text"
                    class="form-control"
                    name="apartment"
                    value={apartment}
                    placeholder="Appartments, suite, unit etc ..."
                    required
                    onChange={this.handleOnChange}
                    readOnly={!isToggle}
                  />

                  <div class="row">
                    <div class="col-sm-6">
                      <label>Town / City *</label>
                      <input
                        type="text"
                        value={town}
                        class="form-control"
                        name="town"
                        onChange={this.handleOnChange}
                        required
                        readOnly={!isToggle}
                      />
                    </div>

                    <div class="col-sm-6">
                      <label>District *</label>
                      <input
                        name="district"
                        type="text"
                        value={district}
                        onChange={this.handleOnChange}
                        class="form-control"
                        required
                        readOnly={!isToggle}
                      />
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-sm-6">
                      <label>Postcode / ZIP *</label>
                      <input
                        name="postCode"
                        type="text"
                        value={postCode}
                        onChange={this.handleOnChange}
                        class="form-control"
                        required
                        readOnly={!isToggle}
                      />
                    </div>

                    <div class="col-sm-6">
                      <label>Phone *</label>
                      <input
                        type="tel"
                        value={phone_number}
                        onChange={this.handleOnChange}
                        name="phone_number"
                        class="form-control"
                        required
                        readOnly={!isToggle}
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    class="btn btn-outline-primary-2 mt-3"
                    onClick={this.toggle}
                  >
                    <span>{!isToggle?"EDIT":"SAVE CHANGES"}</span>
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
export default Address;
