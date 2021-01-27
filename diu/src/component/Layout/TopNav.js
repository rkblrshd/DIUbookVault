import React from "react";
import history from "../../helpers/history";
import { connect } from "react-redux";
import { userActions } from "../../store/actions/userAction";
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
    this.handleOnSubmitSearch = this.handleOnSubmitSearch.bind(this);
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

  handleOnSubmitSearch = e => {
    e.preventDefault();
    console.log(this.state);
  };

  logOut = e =>{
    e.preventDefault()
    this.props.logOut()
    history.push('/login')
  }

  render() {
    const { searchingData } = this.state;
    return (
      <header id="ereaders-header" class="ereaders-header-one">
        <div class="ereaders-main-header">
          <div class="container">
            <div class="row">
              <aside class="col-md-3">
                <a href="index-2.html" class="logo">
                  <img
                    src="./assets/images/logo.png"
                    alt=""
                    height="80"
                    width="150"
                  />
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
                    </li>
                    <li class="">
                      <a href="#" onClick={this.goToQuestionBank}>
                        Question Bank
                      </a>
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
                          <a href="#" onClick={this.gotToCart}>Term 1</a>
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
                      <a href="#" onClick={this.logOut}>
                        Log Out
                      </a>
                      <span class="has-subnav">
                        <i class="fa fa-angle-down"></i>
                      </span>
                    </li>

                    {/* <li class="">
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
                          <button
                            type="submit"
                            class="btn btn-primary ml-2"
                            onClick={this.handleOnSubmitSearch}
                          >
                            Search
                          </button>
                        </div>
                      </form>
                    </li> */}
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

function mapState(state) {
  const { userDetails } = state.userInfo;
  return { userDetails };
}

const actionCreators = {
  logOut:userActions.logout
};
export default connect(mapState, actionCreators)(TopNav);
