import React from "react";
import history from "../../../../helpers/history";
import { connect } from "react-redux";
import axios from "axios";
class BookImagePanel extends React.Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart = e => {
    e.preventDefault();
    const { item, userDetails } = this.props;

    axios
      .post("http://localhost:3001/addtocart", {
        bookid: item.bookid,
        userid: userDetails.userid
      })
      .then(res => history.push("/cart_details"))
      .catch(err => console.log(err));
  };

  render() {
    const { item } = this.props;
    return (
      <div class="ereaders-book-wrap">
        <div class="row">
          <div class="col-md-5">
            <img src={item.imgsrc} alt="" class="ereaders-book-thumb" />
          </div>
          <div class="col-md-7">
            <div class="ereaders-detail-thumb-text">
              <h2>{item.fileName}</h2>

              <div class="clearfix"></div>

              <ul class="mt-5 ereaders-detail-option">
                <li>
                  <h6>Availability: {item.quantity} </h6>
                </li>
                <li>
                  <h6>Price: {item.price}/-</h6>
                </li>
              </ul>
              <div class="ereaders-number-select">
                <label>QTY:</label>
                <input value="01" min="01" max="10" type="number" />
              </div>
              <a
                href="404.html"
                class="ereaders-detail-btn"
                onClick={this.addToCart}
              >
                Add To Cart <i class="icon ereaders-shopping-bag"></i>
              </a>
              <a href="404.html" class="ereaders-detail-btn">
                Download <i class="icon ereaders-link"></i>
              </a>
            </div>
          </div>
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
export default connect(mapState, actionCreators)(BookImagePanel);
