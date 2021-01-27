import React, { useEffect } from "react";
import axios from "axios";
import { connect } from "react-redux";
import SubscrineList from "./SubscribeList";
class SubscribeBook extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      subscribe: [],
      isLoading: true
    };
  }

  componentDidMount() {
    this.fetchsubscribe();
  }
  fetchsubscribe = () => {
    console.log(this.props.userDetails.userid);
    axios
      .post("http://localhost:3001/getSubscribedBook", {
        userid: this.props.userDetails.userid
      })
      .then(res => {
        this.setState({ isLoading: false, subscribe: res.data });
      })
      .catch(err => {
        this.setState({ isLoading: false });
      });
  };
  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <table className="table table-cart table-mobile">
            <thead>
              <tr>
                <th>BookName</th>
                <th>Starting Date</th>
                <th>Ending Date</th>
              </tr>
            </thead>
            <SubscrineList item={this.state.subscribe} />
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
export default connect(mapState, actionCreators)(SubscribeBook);
