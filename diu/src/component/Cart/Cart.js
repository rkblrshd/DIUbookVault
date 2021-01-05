import React from "react";
import TopNav from "../Layout/TopNav";
import history from "../../helpers/history";
import Footer from "../Layout/Footer";
import CartItems from "./CartItems";
class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.proceedToCheckOut = this.proceedToCheckOut.bind(this);
  }

  proceedToCheckOut = e => {
    e.preventDefault();
    history.push("/checkout");
  };
  render() {
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
                      <thead>
                        <tr>
                          <th>Product</th>
                          <th>Price</th>
                          <th>Quantity</th>
                          <th>Total</th>
                          <th></th>
                        </tr>
                      </thead>

                      
                        <CartItems />
                     
                    </table>
                  </div>
                  <aside className="col-lg-3">
                    <div className="summary summary-cart">
                      <h3 className="summary-title">Cart Total</h3>

                      <table className="table table-summary">
                        <tbody>
                          <tr className="summary-subtotal">
                            <td>Subtotal:</td>
                            <td>$160.00</td>
                          </tr>
                          <tr className="summary-shipping">
                            <td>Shipping:</td>
                            <td>&nbsp;</td>
                          </tr>

                          <tr className="summary-shipping-row">
                            <td>
                              <div className="custom-control custom-radio">
                                <input
                                  type="radio"
                                  id="free-shipping"
                                  name="shipping"
                                  className="custom-control-input"
                                />
                                <label
                                  className="custom-control-label"
                                  for="free-shipping"
                                >
                                  Free Shipping
                                </label>
                              </div>
                            </td>
                            <td>$0.00</td>
                          </tr>

                          <tr className="summary-shipping-row">
                            <td>
                              <div className="custom-control custom-radio">
                                <input
                                  type="radio"
                                  id="standart-shipping"
                                  name="shipping"
                                  className="custom-control-input"
                                />
                                <label
                                  className="custom-control-label"
                                  for="standart-shipping"
                                >
                                  Standart:
                                </label>
                              </div>
                            </td>
                            <td>$10.00</td>
                          </tr>

                          <tr className="summary-shipping-row">
                            <td>
                              <div className="custom-control custom-radio">
                                <input
                                  type="radio"
                                  id="express-shipping"
                                  name="shipping"
                                  className="custom-control-input"
                                />
                                <label
                                  className="custom-control-label"
                                  for="express-shipping"
                                >
                                  Express:
                                </label>
                              </div>
                            </td>
                            <td>$20.00</td>
                          </tr>

                          <tr className="summary-shipping-estimate">
                            <td>
                              Estimate for Your Country<br></br>{" "}
                              <a href="dashboard.html">Change address</a>
                            </td>
                            <td>&nbsp;</td>
                          </tr>

                          <tr className="summary-total">
                            <td>Total:</td>
                            <td>$160.00</td>
                          </tr>
                        </tbody>
                      </table>

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
export default Cart;
