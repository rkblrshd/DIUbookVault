import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import SubscribeBook from "./SubsCribedBook/SubscribeBook";

class Subscription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bkashNumber: "",
      transactionId: "",
      results: []
    };
  }
  handleOnSubmit = e => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/setSubscriber", {
        userid: this.props.userDetails.userid,
        transactionId: this.state.transactionId,
        number: this.state.bkashNumber
      })
      .then(res => this.setState({ results: res.data }))
      .catch(err => console.log(err));
  };
  componentDidMount() {
    this.fetchSunsctiption();
  }

  fetchSunsctiption() {
    axios
      .post("http://localhost:3001/getSubscriber", {
        userid: this.props.userDetails.userid
      })
      .then(res => this.setState({ results: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.props.userDetails);
    if (this.state.results.length === 0) {
      return (
        <div>
          <div class="row">
            <div class="col-lg-12">
              <div class="card card-dashboard">
                <div class="card-body">
                  <form action="#">
                    <label>Send Money to this Bkash number 0175615208.</label>

                    <label>Bkash Number</label>
                    <input
                      type="text"
                      class="form-control"
                      onChange={e =>
                        this.setState({ bkashNumber: e.target.value })
                      }
                      value={this.state.bkashNumber}
                    />

                    <label>Transaction Id</label>
                    <input
                      type="text"
                      onChange={e =>
                        this.setState({ transactionId: e.target.value })
                      }
                      class="form-control mb-2"
                      value={this.state.transactionId}
                    />

                    <button
                      type="submit"
                      class="btn btn-outline-primary-2"
                      onClick={this.handleOnSubmit}
                    >
                      <span>Confirm</span>
                      <i class="icon-long-arrow-right"></i>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div>
        <SubscribeBook />
      </div>
    );
  }
}
function mapState(state) {
  const { userDetails } = state.userInfo;
  return { userDetails };
}

const actionCreators = {};
export default connect(mapState, actionCreators)(Subscription);
