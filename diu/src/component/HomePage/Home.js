import React, { useEffect, useState } from "react";
import TopNav from "../Layout/TopNav";
import Footer from "../Layout/Footer";
import axios from "axios";
import BookList from "./Books/BookList";
function Home() {
  const [page, setPage] = useState(1);
  const [level, setLevel] = useState(0);
  const [term, setTerm] = useState(0);
  const [examptype, setExamtype] = useState(0);
  const [bookData, setBookData] = useState({});

  useEffect(() => {
    fetchAllData();
  }, []);
  const onNextButton = e => {
    e.preventDefault();
    console.log("NEXT");
    setPage(page + 1);

    fetchAllData()
  };
  const onPreviousButton = e => {
    e.preventDefault();
    setPage(page > 1 ? page - 1 : 1);
    fetchAllData()
  };

  const fetchAllData = () => {
    console.log(page);
    axios
      .get(`http://localhost:3001/getBook?page=${page}`)
      .then(res => {
        console.log(res.data);
        setBookData(res.data);
      })
      .catch(err => console.log(err));
  };

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
                  DIU Book Vault is a website where a student of computer
                  science & engineering department of Daffodil International
                  University can find all academic books both soft and hard
                  copy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <BookList page={page} bookData={bookData} />
      <div class="ereaders-pagination">
        <ul class="page-numbers">
          <li>
            <a class="previous page-numbers" onClick={onPreviousButton}>
              <span aria-label="Previous">
                <i class="icon ereaders-arrow-point-to-right"></i>
              </span>
            </a>
          </li>

          <li>
            <a class="next page-numbers" onClick={onNextButton}>
              <span aria-label="Next">
                <i class="icon ereaders-arrow-point-to-right"></i>
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div class="clearfix"></div>
      <Footer />
    </div>
  );
}
export default Home;
