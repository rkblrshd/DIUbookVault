import React, { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import OrderList from "./OrderList";

class OrderPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      orders: [],
      isLoading: true
    };
  }

  componentDidMount() {
    this.fetchOrders();
  }
  fetchOrders = () => {
    console.log(this.props.userDetails.userid);
    axios
      .post("http://localhost:3001/getOrder", {
        userid: this.props.userDetails.userid
      })
      .then(res => {
        this.setState({ isLoading: false, orders: res.data });
      })
      .catch(err => {
        this.setState({ isLoading: false });
      });
  };
  render() {
    if (this.state.isLoading) {
      return (
        <div>
          <p>No order has been made yet.</p>
          <a href="category.html" class="btn btn-outline-primary-2">
            <span>GO SHOP</span>
            <i class="icon-long-arrow-right"></i>
          </a>
        </div>
      );
    }
    return (
      <div className="row">
        <div className="col-lg-12">
          <table className="table table-cart table-mobile">
            <thead>
              <tr>
                <th>OrderNo</th>
                <th>Total</th>
                <th>Status</th>
              </tr>
            </thead>
            {/* <CartItems item={this.state.cartData} /> */}
            <OrderList item={this.state.orders}/>
          </table>
        </div>
      </div>
    );
  }
}

function mapState(state) {
  const { userDetails } = state.userInfo;
  return { userDetails };
}

const actionCreators = {};
export default connect(mapState, actionCreators)(OrderPage);
