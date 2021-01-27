import React from "react";
import history from "../../../helpers/history";
import axios from "axios";
import { connect } from "react-redux";
class BookItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddToCartButton = this.handleAddToCartButton.bind(this);
  }

  handleAddToCartButton = e => {
    e.preventDefault();
    // history.push("/cart_details");
    const { item,userDetails } = this.props;
    
    axios
      .post("http://localhost:3001/addtocart", {
        bookid: item.bookid,
        userid:userDetails.userid
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };
  openBookDetailsButton = e => {
    e.preventDefault();
    history.push("/book_details", { item: this.props.item });
  };

  render() {
    const { item } = this.props;
    console.log(item.imgsrc)
    return (
      <li class="col-md-3">
        <figure>
          <a href="book-detail.html">
            <img src={item.imgsrc} alt="" />
          </a>
          <figcaption>
            <a
              href="#"
              class="icon ereaders-link"
              data-toggle="tooltip"
              title="Download"
            ></a>
          </figcaption>
        </figure>
        <div class="ereaders-book-grid-text">
          <h2>
            <a href="book-detail.html" onClick={this.openBookDetailsButton}>
              {item.fileName}
            </a>
          </h2>
          <span>{item.price}/-</span>
          <div>
            <a
              href="book-detail.html"
              class="ereaders-simple-btn ereaders-bgcolor mt-5 "
              onClick={this.handleAddToCartButton}
            >
              Add To Cart
            </a>
          </div>
        </div>
      </li>
    );
  }
}

function mapState(state) {
  const { userDetails } = state.userInfo;
  return { userDetails };
}

const actionCreators = {};
export default connect(mapState, actionCreators)(BookItem);
