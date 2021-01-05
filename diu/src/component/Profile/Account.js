import React from "react";
import TopNav from "../Layout/TopNav";
import Footer from "../Layout/Footer";
import Address from "./Address";
import AccountDetails from "./ChangePass";
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
                            class="nav-link active"
                            id="tab-dashboard-link"
                            data-toggle="tab"
                            href="#tab-dashboard"
                            role="tab"
                            aria-controls="tab-dashboard"
                            aria-selected="true"
                          >
                            Dashboard
                          </a>
                        </li>
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
                            id="tab-downloads-link"
                            data-toggle="tab"
                            href="#tab-downloads"
                            role="tab"
                            aria-controls="tab-downloads"
                            aria-selected="false"
                          >
                            Downloads
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
                          <a class="nav-link" href="#">
                            Sign Out
                          </a>
                        </li>
                      </ul>
                    </aside>
                  </span>

                  <div class="col-md-8 col-lg-9">
                    <div class="tab-content">
                      <div
                        class="tab-pane fade show active"
                        id="tab-dashboard"
                        role="tabpanel"
                        aria-labelledby="tab-dashboard-link"
                      >
                        <p>
                          Hello{" "}
                          <span class="font-weight-normal text-dark">User</span>{" "}
                          (not{" "}
                          <span class="font-weight-normal text-dark">User</span>
                          ? <a href="#">Log out</a>)<br></br>
                          From your account dashboard you can view your{" "}
                          <a
                            href="#tab-orders"
                            class="tab-trigger-link link-underline"
                          >
                            recent orders
                          </a>
                          , manage your{" "}
                          <a href="#tab-address" class="tab-trigger-link">
                            shipping and billing addresses
                          </a>
                          , and{" "}
                          <a href="#tab-changepass" class="tab-trigger-link">
                            edit your password and account details
                          </a>
                          .
                        </p>
                      </div>

                      <div
                        class="tab-pane fade"
                        id="tab-orders"
                        role="tabpanel"
                        aria-labelledby="tab-orders-link"
                      >
                        <p>No order has been made yet.</p>
                        <a
                          href="category.html"
                          class="btn btn-outline-primary-2"
                        >
                          <span>GO SHOP</span>
                          <i class="icon-long-arrow-right"></i>
                        </a>
                      </div>

                      <div
                        class="tab-pane fade"
                        id="tab-downloads"
                        role="tabpanel"
                        aria-labelledby="tab-downloads-link"
                      >
                        <p>No downloads available yet.</p>
                        <a
                          href="category.html"
                          class="btn btn-outline-primary-2"
                        >
                          <span>GO SHOP</span>
                          <i class="icon-long-arrow-right"></i>
                        </a>
                      </div>

                      <div
                        class="tab-pane fade"
                        id="tab-address"
                        role="tabpanel"
                        aria-labelledby="tab-address-link"
                      >
                        <Address/>
                      </div>
                      <div
                        class="tab-pane fade"
                        id="tab-changepass"
                        role="tabpanel"
                        aria-labelledby="tab-changepass-link"
                      >
                        <AccountDetails/>
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
