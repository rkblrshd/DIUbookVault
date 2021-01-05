import React from "react";
import TopNav from "../Layout/TopNav";
import Footer from "../Layout/Footer";
class Checkout extends React.Component {
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
      notes: ""
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

  handleOnSubmit = e =>{
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    const {first_name,last_name,address,apartment,town,district,phone_number,postCode,email,notes} = this.state
    return (
      <div class="ereaders-main-wrapper">
        <TopNav />
        <main class="main">
          <div
            class="page-header text-center"
          >
            <div className="container">
              <h1 className="page-title">
                Checkout <span>Shop</span>
              </h1>
            </div>
          </div>

          <div class="page-content">
            <div class="checkout">
              <div class="container ">
                <form action="#">
                  <div class="row">
                    <div class="col-lg-9">
                      <h2 class="checkout-title">Billing Details</h2>
                      <div class="row">
                        <div class="col-sm-6">
                          <label>First Name *</label>
                          <input
                            type="text"
                            class="form-control"
                            name="first_name"
                            required
                            value={first_name}
                            onChange={this.handleOnChange}
                          />
                        </div>

                        <div class="col-sm-6">
                          <label>Last Name *</label>
                          <input
                            type="text"
                            name="last_name"
                            class="form-control"
                            required
                            value={last_name}
                            onChange={this.handleOnChange}
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
                      />
                      <input
                        type="text"
                        class="form-control"
                        name="apartment"
                        value={apartment}
                        placeholder="Appartments, suite, unit etc ..."
                        required
                        onChange={this.handleOnChange}
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
                          />
                        </div>
                      </div>

                      <label>Email address *</label>
                      <input
                        type="email"
                        name="email"
                        onChange={this.handleOnChange}
                        class="form-control"
                        required
                        value={email}
                      />

                      <label>Order notes (optional)</label>
                      <textarea
                        class="form-control"
                        cols="30"
                        rows="4"
                        name="notes"
                        value={notes}
                        onChange={this.handleOnChange}
                        placeholder="Notes about your order, e.g. special notes for delivery"
                      ></textarea>
                    </div>
                    <aside class="col-lg-3">
                      <div class="summary">
                        <h3 class="summary-title">Your Order</h3>

                        <table class="table table-summary">
                          <thead>
                            <tr>
                              <th>Product</th>
                              <th>Total</th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              <td>
                                <a href="#">
                                  Beige knitted elastic runner shoes
                                </a>
                              </td>
                              <td>$84.00</td>
                            </tr>

                            <tr>
                              <td>
                                <a href="#">Blue utility pinafore denimdress</a>
                              </td>
                              <td>$76,00</td>
                            </tr>
                            <tr class="summary-subtotal">
                              <td>Subtotal:</td>
                              <td>$160.00</td>
                            </tr>
                            <tr>
                              <td>Shipping:</td>
                              <td>Free shipping</td>
                            </tr>
                            <tr class="summary-total">
                              <td>Total:</td>
                              <td>$160.00</td>
                            </tr>
                          </tbody>
                        </table>

                        <div class="accordion-summary" id="accordion-payment">
                          <div class="card">
                            <div class="card-header" id="heading-3">
                              <h5 class="card-title">
                                <a
                                  class="collapsed"
                                  role="button"
                                  data-toggle="collapse"
                                  href="#collapse-3"
                                  aria-expanded="false"
                                  aria-controls="collapse-3"
                                >
                                  Cash on delivery
                                </a>
                              </h5>
                            </div>
                          </div>
                        </div>

                        <button
                          type="submit"
                          class="btn btn-outline-primary-2 btn-order btn-block"
                          onClick={this.handleOnSubmit}
                        >
                          <span class="btn-text">Place Order</span>
                        </button>
                      </div>
                    </aside>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}
export default Checkout;
