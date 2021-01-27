import React from "react";
import bookData from "../../../constant/bookData";
import history from "../../../helpers/history";
import BookItem from "./BookItem";
import axios from "axios";
class BookList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      bookData: {}
    };

    this.openBookDetailsButton = this.openBookDetailsButton.bind(this);
  }

  
  openBookDetailsButton = e => {
    e.preventDefault();
    history.push("/book_details");
  };

  render() {
    const { bookData } = this.props;
    return (
      <div class="ereaders-main-content">
        <div class="ereaders-main-section">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="ereaders-books ereaders-book-grid">
                  <ul class="row">
                    {bookData.products &&
                      bookData.products.map((item, key) => {
                        return <BookItem item={item} key={key} />;
                      })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookList;
