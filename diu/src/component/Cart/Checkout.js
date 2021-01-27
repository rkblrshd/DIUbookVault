import React from "react";
import TopNav from "../Layout/TopNav";
import Footer from "../Layout/Footer";
import FormData from "form-data";
import { connect } from "react-redux";
import axios from "axios";
class Checkout extends React.Component {
  constructor(props) {
    super(props);

    const { userDetails } = this.props;
    this.state = {
      first_name: userDetails.firstname ? userDetails.firstname : "",
      last_name: userDetails.lastname ? userDetails.lastname : "",
      address: userDetails.address ? userDetails.address : "",
      apartment: userDetails.apartment ? userDetails.apartment : "",
      town: userDetails ? userDetails.town : "",
      district: userDetails ? userDetails.district : "",
      postCode: userDetails ? userDetails.postCode : "",
      phone_number: userDetails ? userDetails.phone_number : "",
      isPlaced: false
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

  handleOnSubmit = e => {
    e.preventDefault();
    this.placeOrder();
    console.log(this.state);
  };

  totalAmount = () => {
    const { item } = this.props.location.state;

    var total = 0;
    item.map(item => {
      total = total + item.price * item.cartquantity;
    });
    return total;
  };

  placeOrder = () => {
    const { item, subscriptionUse } = this.props.location.state;
    axios
      .post("http://localhost:3001/order", {
        item: item,
        price: subscriptionUse ? 0 : this.totalAmount(),
        userid: item[0].userid
      })
      .then(res => {
        this.setState({ isPlaced: true });
      })
      .catch(err => console.log(err));
  };
  componentWillUnmount() {
    this.setState({ isPlaced: false });
  }
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
      isPlaced
    } = this.state;

    const { item,subscriptionUse } = this.props.location.state;
    console.log(item);
    return (
      <div class="ereaders-main-wrapper">
        <TopNav />
        <main class="main">
          <div class="page-header text-center">
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
                            {item &&
                              item.map(item => {
                                return (
                                  <tr>
                                    <td>
                                      <a href="#">{item.fileName}</a>
                                    </td>
                                    <td>{item.price}/-</td>
                                  </tr>
                                );
                              })}
                            <tr class="summary-total">
                              <td>Total:</td>
                              <td>
                                {subscriptionUse
                                  ? 0
                                  : this.totalAmount()}
                                /-
                              </td>
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
                        {isPlaced && (
                          <p class="text-success">
                            Order has been placed. Please Check your orders in
                            Account
                          </p>
                        )}

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
function mapState(state) {
  const { userDetails } = state.userInfo;
  return { userDetails };
}

const actionCreators = {};
export default connect(mapState, actionCreators)(Checkout);
