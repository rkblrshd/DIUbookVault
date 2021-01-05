import React from "react";
import history from "../../helpers/history";
class TopNav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchingData: ""
    };

    this.navigation = this.navigation.bind(this);
    this.goToAccount = this.goToAccount.bind(this);
    this.goToQuestionBank = this.goToQuestionBank.bind(this);
    this.gotToHome = this.gotToHome.bind(this);
    this.gotToBooks = this.gotToBooks.bind(this);
    this.gotToCart = this.gotToCart.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnSubmitSearch = this.handleOnSubmitSearch.bind(this)
  }
  navigation = value => {
    history.push("/" + value);
  };

  handleOnChange = e => {
    const { value } = e.target;
    this.setState({ searchingData: value });
  };

  goToAccount = e => {
    e.preventDefault();
    this.navigation("account");
  };

  goToQuestionBank = e => {
    e.preventDefault();
    this.navigation("question");
  };

  gotToHome = e => {
    e.preventDefault();
    this.navigation("home");
  };

  gotToBooks = e => {
    e.preventDefault();
    this.navigation("books");
  };

  gotToCart = e => {
    e.preventDefault();
    this.navigation("cart_details");
  };

  handleOnSubmitSearch = e =>{
    e.preventDefault()
    console.log(this.state)
  }

  render() {
    const {searchingData} = this.state
    return (
      <header id="ereaders-header" class="ereaders-header-one">
        <div class="ereaders-main-header">
          <div class="container">
            <div class="row">
              <aside class="col-md-3">
                <a href="index-2.html" class="logo">
                  <img src="./assets/images/logo.png" alt="" height='30' width='30'/>
                </a>
              </aside>
              <aside class="col-md-9">
                <a href="#menu" class="menu-link active">
                  <span></span>
                </a>
                <nav id="menu" class="menu navbar navbar-default">
                  <ul class="level-1 navbar-nav">
                    <li>
                      <a href="index-2.html" onClick={this.gotToHome}>
                        Home
                      </a>
                    </li>
                    <li class="">
                      <a href="#" onClick={this.gotToBooks}>
                        Books
                      </a>
                      <span class="has-subnav">
                        <i class="fa fa-angle-down"></i>
                      </span>
                      <ul class="sub-menu level-2">
                        <li>
                          <a href="book-grid.html">Level 1</a>
                          <span class="has-subnav">
                            <i class="fa fa-angle-down"></i>
                          </span>
                          <ul class="sub-menu">
                            <li>
                              <a href="book-grid-wls.html">Term 1</a>
                            </li>
                            <li>
                              <a href="book-grid-wrs.html">Term 2</a>
                            </li>
                            <li>
                              <a href="book-grid-wrs.html">Term 3</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="book-grid.html">Level 2</a>
                          <span class="has-subnav">
                            <i class="fa fa-angle-down"></i>
                          </span>
                          <ul class="sub-menu">
                            <li>
                              <a href="book-grid-wls.html">Term 1</a>
                            </li>
                            <li>
                              <a href="book-grid-wrs.html">Term 2</a>
                            </li>

                            <li>
                              <a href="book-grid-wrs.html">Term 3</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="book-grid.html">Level 3</a>
                          <span class="has-subnav">
                            <i class="fa fa-angle-down"></i>
                          </span>
                          <ul class="sub-menu">
                            <li>
                              <a href="book-grid-wls.html">Term 1</a>
                            </li>
                            <li>
                              <a href="book-grid-wrs.html">Term 2</a>
                            </li>
                            <li>
                              <a href="book-grid-wrs.html">Term 3</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="book-grid.html">Level 4</a>
                          <span class="has-subnav">
                            <i class="fa fa-angle-down"></i>
                          </span>
                          <ul class="sub-menu">
                            <li>
                              <a href="book-grid-wls.html">Term 1</a>
                            </li>
                            <li>
                              <a href="book-grid-wrs.html">Term 2</a>
                            </li>
                            <li>
                              <a href="book-grid-wrs.html">Term 3</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li class="">
                      <a href="#" onClick={this.goToQuestionBank}>
                        Question Bank
                      </a>
                      <span class="has-subnav">
                        <i class="fa fa-angle-down"></i>
                      </span>
                      <ul class="sub-menu level-2">
                        <li>
                          <a href="book-grid.html">Level 1</a>
                          <span class="has-subnav">
                            <i class="fa fa-angle-down"></i>
                          </span>
                          <ul class="sub-menu">
                            <li>
                              <a href="book-grid-wls.html">Term 1</a>
                            </li>
                            <li>
                              <a href="book-grid-wrs.html">Term 2</a>
                            </li>
                            <li>
                              <a href="book-grid-wrs.html">Term 3</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="book-grid.html">Level 2</a>
                          <span class="has-subnav">
                            <i class="fa fa-angle-down"></i>
                          </span>
                          <ul class="sub-menu">
                            <li>
                              <a href="book-grid-wls.html">Term 1</a>
                            </li>
                            <li>
                              <a href="book-grid-wrs.html">Term 2</a>
                            </li>

                            <li>
                              <a href="book-grid-wrs.html">Term 3</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="book-grid.html">Level 3</a>
                          <span class="has-subnav">
                            <i class="fa fa-angle-down"></i>
                          </span>
                          <ul class="sub-menu">
                            <li>
                              <a href="book-grid-wls.html">Term 1</a>
                            </li>
                            <li>
                              <a href="book-grid-wrs.html">Term 2</a>
                            </li>
                            <li>
                              <a href="book-grid-wrs.html">Term 3</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="book-grid.html">Level 4</a>
                          <span class="has-subnav">
                            <i class="fa fa-angle-down"></i>
                          </span>
                          <ul class="sub-menu">
                            <li>
                              <a>Term 1</a>
                            </li>
                            <li>
                              <a href="book-grid-wrs.html">Term 2</a>
                            </li>
                            <li>
                              <a href="book-grid-wrs.html">Term 3</a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li class="">
                      <a href="#" onClick={this.goToAccount}>
                        Account
                      </a>
                      <span class="has-subnav">
                        <i class="fa fa-angle-down"></i>
                      </span>
                    </li>
                    <li>
                      <a href="book-grid.html" onClick={this.gotToCart}>
                        Cart
                      </a>
                      <span class="has-subnav">
                        <i class="fa fa-angle-down"></i>
                      </span>
                      {/* <ul class="sub-menu">
                        <li>
                          <a href="book-grid-wls.html">Term 1</a>
                        </li>
                        <li>
                          <a href="book-grid-wrs.html">Term 2</a>
                        </li>
                        <li>
                          <a href="book-grid-wrs.html">Term 3</a>
                        </li>
                      </ul> */}
                    </li>

                    <li class="">
                      <form className="form-inline">
                        <div class="form-group mx-sm-3 mb-2">
                          <input
                            type="text"
                            class="form-control"
                            id="inputPassword2"
                            placeholder="Search"
                            value={searchingData}
                            onChange={this.handleOnChange}
                            name="searchingData"
                          />
                          <button type="submit" class="btn btn-primary ml-2" onClick = {this.handleOnSubmitSearch}>
                            Search
                          </button>
                        </div>
                      </form>
                    </li>
                  </ul>
                </nav>
              </aside>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default TopNav;
{
  /* <div class="dropdown-cart-products">
                                    <div class="product">
                                        <div class="product-cart-details">
                                            <h4 class="product-title">
                                                <a href="product.html">Beige knitted elastic runner shoes</a>
                                            </h4>

                                            <span class="cart-product-info">
                                                <span class="cart-product-qty">1</span>
                                                x $84.00
                                            </span>
                                        </div>

                                        <figure class="product-image-container">
                                            <a href="product.html" class="product-image">
                                                <img src="assets/images/products/cart/product-1.jpg" alt="product"/>
                                            </a>
                                        </figure>
                                        <a href="#" class="btn-remove" title="Remove Product"><i class="icon-close"></i></a>
                                    </div>

                                    <div class="product">
                                        <div class="product-cart-details">
                                            <h4 class="product-title">
                                                <a href="product.html">Blue utility pinafore denim dress</a>
                                            </h4>

                                            <span class="cart-product-info">
                                                <span class="cart-product-qty">1</span>
                                                x $76.00
                                            </span>
                                        </div>

                                        <figure class="product-image-container">
                                            <a href="product.html" class="product-image">
                                                <img src="assets/images/products/cart/product-2.jpg" alt="product"/>
                                            </a>
                                        </figure>
                                        <a href="#" class="btn-remove" title="Remove Product"><i class="icon-close"></i></a>
                                    </div>
                                </div>

                                <div class="dropdown-cart-total">
                                    <span>Total</span>

                                    <span class="cart-total-price">$160.00</span>
                                </div>

                                <div class="dropdown-cart-action">
                                    <a href="cart.html" class="btn btn-primary">View Cart</a>
                                    <a href="checkout.html" class="btn btn-outline-primary-2"><span>Checkout</span><i class="icon-long-arrow-right"></i></a>
                                </div> */
}
