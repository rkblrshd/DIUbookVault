import logo from "./logo.svg";
import "./App.css";
import Book from "./component/HomePage/Books/Book";
import Details from "./component/HomePage/Books/BookDetail/Details";
import Login from "./component/Authentication/Login";
import Register from "./component/Authentication/Register";
import Checkout from "./component/Cart/Checkout";
import Cart from "./component/Cart/Cart";
import Account from "./component/Profile/Account";
import Allfiles from "./component/Drive/Allfiles";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import BookList from "./component/HomePage/Books/BookList";
import history from "./helpers/history";
function App() {
  return (
    <div>
      <Router history={history}>
        <div className="App">
          <Switch>
            <Route exact path="/home" component={Book} />
            <Route exact path="/books" component={Book} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/account" component={Account} />
            <Route exact path="/book_details" component={Details} />
            <Route exact path="/cart_details" component={Cart} />
            <Route exact path="/checkout" component={Checkout} />
            <Route exact path="/question" component={Allfiles} />
            <Redirect from="*" to="/login" />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
