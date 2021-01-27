import React from "react";
import TopNav from "../Layout/TopNav";
import history from "../../helpers/history";
import Footer from "../Layout/Footer";
import CartItems from "./CartItems";
import Popup from "reactjs-popup";
import axios from "axios";

import { connect } from "react-redux";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cartData: [],
      subscriptionUse: false,
      message: null
    };
    this.proceedToCheckOut = this.proceedToCheckOut.bind(this);
  }

  proceedToCheckOut = e => {
    e.preventDefault();
    history.push("/checkout", {
      item: this.state.cartData,
      subscriptionUse: this.state.subscriptionUse
    });
  };
  componentDidMount() {
    this.getCartData();
  }
  getCartData() {
    const { userDetails } = this.props;
    const userid = userDetails.userid;
    axios
      .get(`http://localhost:3001/cartItem?userid=${userid}`)
      .then(res => this.setState({ cartData: res.data }))
      .catch(err => console.log(err));
  }

  totalAmount = () => {
    const { cartData } = this.state;

    var total = 0;
    cartData.map(item => {
      total = total + item.price * item.cartquantity;
    });
    return total;
  };
  toggleSubscription(props) {
    const { userDetails } = this.props;
    if (!this.state.subscriptionUse) {
      axios
        .post("http://localhost:3001/checksubscription", {
          userid: userDetails.userid
        })
        .then(res => {
          console.log(res);
          if (res.data.length > 0) {
            this.setState({ subscriptionUse: true, message: null });
          } else {
            this.setState({
              subscriptionUse: false,
              message: "Subscription Required"
            });
          }
        })
        .catch(err => console.log(err));
    } else {
      this.setState({ subscriptionUse: false, message: null });
    }
  }
  render() {
    console.log(this.state.subscriptionUse);
    return (
      <div class="page-wrapper">
        <TopNav />
        <main class="main">
          <div
            class="page-header text-center"
            styles="background-image: url('./assets/images/page-header-bg.jpg')"
          >
            <div className="container">
              <h1 className="page-title">Shopping Cart</h1>
            </div>
          </div>

          <div className="page-content">
            <div className="cart">
              <div className="container">
                <div className="row">
                  <div className="col-lg-9">
                    <table className="table table-cart table-mobile">
                      {this.state.cartData.length > 0 && (
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                      )}
                      {this.state.cartData.length === 0 && (
                        <p>Nothing is on cart.</p>
                      )}

                      <CartItems item={this.state.cartData} />
                    </table>
                  </div>
                  <aside className="col-lg-3">
                    <div className="summary summary-cart">
                      <h3 className="summary-title">Cart Total</h3>

                      <table className="table table-summary">
                        <tbody>
                          <tr className="summary-total">
                            <td>Total:</td>
                            <td>
                              {this.state.subscriptionUse
                                ? 0
                                : this.totalAmount()}
                              /-
                            </td>
                          </tr>
                          <tr>
                            <td>Use Subscription</td>
                            <td>
                              <a>
                                <label className="switch">
                                  <input
                                    type="checkbox"
                                    onChange={() =>
                                      this.toggleSubscription(this.props)
                                    }
                                    defaultChecked={this.state.subscriptionUse}
                                  />
                                  <span class="slider round"></span>
                                </label>
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      {this.state.message && (
                        <p class="text-success">{this.state.message}</p>
                      )}
                      <a
                        href="checkout.html"
                        className="btn btn-outline-primary-2 btn-order btn-block"
                        onClick={this.proceedToCheckOut}
                      >
                        PROCEED TO CHECKOUT
                      </a>
                    </div>
                  </aside>
                </div>
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
export default connect(mapState, actionCreators)(Cart);
