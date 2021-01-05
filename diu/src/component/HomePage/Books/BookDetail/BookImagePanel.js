import React from "react";
import history from '../../../../helpers/history'
class BookImagePanel extends React.Component {
  constructor(props) {
    super(props);

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart = e => {
    e.preventDefault();
    history.push("/cart_details");
  };

  render() {
    return (
      <div class="ereaders-book-wrap">
        <div class="row">
          <div class="col-md-5">
            <img
              src="./assets/extra-images/tit.jpg"
              alt=""
              class="ereaders-book-thumb"
            />
          </div>
          <div class="col-md-7">
            <div class="ereaders-detail-thumb-text">
            
              <h2>Computer Architecture</h2>
              <div class="star-rating">
                <span class="star-rating-box" styles="width:60%"></span>
              </div>
              <small>( Review 03 )</small>
              <div class="clearfix"></div>
              <span>
                $200.00<del>$300.00</del>
              </span>
              <p>
              In computer engineering, computer architecture is a set of rules and methods that describe the functionality, organization, and implementation of computer systems. Some definitions of architecture define it as describing the capabilities and programming model of a computer but not a particular implementation.
              </p>
              <ul class="ereaders-detail-option">
                <li>
                  <h6>Availability:</h6>
                  <span>20 Piece in stock</span>
                </li>
                <li>
                  <h6>Tags:</h6>
                  <a href="404.html">ebook, </a>
                  <a href="404.html">business, </a>
                  <a href="404.html">author</a>
                </li>
                <li>
                  <h6>Product Code:</h6>
                  <span> CA78963</span>
                </li>
              </ul>
              <div class="ereaders-number-select">
                <label>QTY:</label>
                <input value="01" min="01" max="10" type="number" />
              </div>
              <a href="404.html" class="ereaders-detail-btn" onClick={this.addToCart}>
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

export default BookImagePanel;
