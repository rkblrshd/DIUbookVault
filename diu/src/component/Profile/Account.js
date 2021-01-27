import React from "react";
import TopNav from "../Layout/TopNav";
import Footer from "../Layout/Footer";
import Address from "./Address";
import AccountDetails from "./ChangePass";
import Subscription from "../Subscription/Subscription";
import OrderPage from "./OrderPage";
class Account extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="ereaders-main-wrapper">
        <TopNav />
        <main class="main">
          <div
            class="page-header text-center"
            styles="background-image: url('./assets/images/page-header-bg.jpg')"
          >
            <div class="container">
              <h1 class="page-title">My Account</h1>
            </div>
          </div>

          <div class="page-content ">
            <div class="dashboard">
              <div class="container">
                <div class="row">
                  <span class="border-right">
                    <aside class="col-md-4 col-lg-3">
                      <ul
                        class="nav nav-dashboard flex-column mb-3 mb-md-0"
                        role="tablist"
                      >
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            id="tab-orders-link"
                            data-toggle="tab"
                            href="#tab-orders"
                            role="tab"
                            aria-controls="tab-orders"
                            aria-selected="false"
                          >
                            Orders
                          </a>
                        </li>

                        <li class="nav-item">
                          <a
                            class="nav-link"
                            id="tab-address-link"
                            data-toggle="tab"
                            href="#tab-address"
                            role="tab"
                            aria-controls="tab-address"
                            aria-selected="false"
                          >
                            Adresses
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            id="tab-changepass-link"
                            data-toggle="tab"
                            href="#tab-changepass"
                            role="tab"
                            aria-controls="tab-changepass"
                            aria-selected="false"
                          >
                            Change Password
                          </a>
                        </li>
                        <li class="nav-item">
                          <a
                            class="nav-link"
                            id="tab-subscription-link"
                            data-toggle="tab"
                            href="#tab-subscription"
                            role="tab"
                            aria-controls="subscription"
                            aria-selected="false"
                          >
                            Subscription
                          </a>
                        </li>
                      </ul>
                    </aside>
                  </span>

                  <div class="col-md-8 col-lg-9">
                    <div class="tab-content">
                      <div
                        class="tab-pane fade"
                        id="tab-orders"
                        role="tabpanel"
                        aria-labelledby="tab-orders-link"
                      >
                        <OrderPage />
                      </div>

                      <div
                        class="tab-pane fade  show active"
                        id="tab-address"
                        role="tabpanel"
                        aria-labelledby="tab-address-link"
                      >
                        <Address />
                      </div>
                      <div
                        class="tab-pane fade"
                        id="tab-changepass"
                        role="tabpanel"
                        aria-labelledby="tab-changepass-link"
                      >
                        <AccountDetails />
                      </div>
                      <div
                        class="tab-pane fade"
                        id="tab-subscription"
                        role="tabpanel"
                        aria-labelledby="tab-subscription-link"
                      >
                        <Subscription />
                      </div>
                    </div>
                  </div>
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
export default Account;
