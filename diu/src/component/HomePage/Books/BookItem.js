import React from "react";
import history from "../../../helpers/history";
class BookItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddToCartButton = this.handleAddToCartButton.bind(this)
  }

  handleAddToCartButton = e =>{
      e.preventDefault()
      history.push('/cart_details')
  }
  openBookDetailsButton = e =>{
    e.preventDefault()
    history.push('/book_details')
  }


  render() {
    const { item } = this.props;
    return (
      <li class="col-md-3">
        <figure>
          <a href="book-detail.html">
            <img src={item.image_src} alt="" />
          </a>
          <figcaption>
            <a
              href="#"
              class="icon ereaders-link"
              data-toggle="tooltip"
              title="Download"
            ></a>
            {/* <a
                                href="#"
                                class="icon ereaders-heart"
                                data-toggle="tooltip"
                                title="Add To Wishlist"
                              ></a>
                              <a
                                href="#"
                                class="icon ereaders-reload"
                                data-toggle="tooltip"
                                title="Reload"
                              ></a> */}
          </figcaption>
        </figure>
        <div class="ereaders-book-grid-text">
          <h2>
            <a href="book-detail.html" onClick={this.openBookDetailsButton}>
              {item.book_name}
            </a>
          </h2>
          <span>{item.book_price}/-</span>
          <div>
            <a
              href="book-detail.html"
              class="ereaders-simple-btn ereaders-bgcolor mt-2"
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
export default BookItem;
