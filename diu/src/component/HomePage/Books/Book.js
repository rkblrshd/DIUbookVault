import React from "react";
import BookList from "./BookList";
import TopNav from "../../Layout/TopNav";
import Footer from "../../Layout/Footer";

class Book extends React.Component {
  render() {
    return (
      <div class="ereaders-main-wrapper">
        <TopNav />
        <div class="ereaders-subheader">
          <div class="ereaders-subheader-text">
            <span class="ereaders-subheader-transparent"></span>
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <h1>DIU BOOK VAULT</h1>
                  <p>
                  DIU Book Vault is a website where a student of computer science & engineering
department of Daffodil International University can find all academic books both soft and
hard copy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <BookList />
        <div class="ereaders-pagination">
          <ul class="page-numbers">
            <li>
              <a class="previous page-numbers" href="404.html">
                <span aria-label="Next">
                  <i class="icon ereaders-arrow-point-to-right"></i>
                </span>
              </a>
            </li>
            <li>
              <span class="page-numbers current">01</span>
            </li>
            <li>
              <a class="page-numbers" href="404.html">
                02
              </a>
            </li>
            <li>
              <a class="page-numbers" href="404.html">
                03
              </a>
            </li>
            <li>
              <a class="page-numbers" href="404.html">
                04
              </a>
            </li>
            <li>
              <a class="next page-numbers" href="404.html">
                <span aria-label="Next">
                  <i class="icon ereaders-arrow-point-to-right"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div class="clearfix"></div>
        <Footer/>
      </div>
    );
  }
}

export default Book;
