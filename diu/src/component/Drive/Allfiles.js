import React, { useEffect, useState } from "react";
import TopNav from "../Layout/TopNav";
import Footer from "../Layout/Footer";
import axios from "axios";
import QuestionIList from "./QuestionIList";
function AllFiles() {
  const [page, setPage] = useState(1);
  const [level, setLevel] = useState(0);
  const [term, setTerm] = useState(0);
  const [examptype, setExamtype] = useState(0);
  const [questionData, setQuestionData] = useState({});

  useEffect(() => {
    fetchAllData();
  }, []);
  const onNextButton = e => {
    e.preventDefault();
    console.log("NEXT");
    setPage(page + 1);
    if (level != 0 && examptype != 0 && term != 0) {
      console.log("1");
      fetchDataByLevelTermExamtype();
    } else if (level != 0 && examptype != 0) {
      console.log("not term");
      fetchDataByLevelExamType();
    } else if (level != 0 && term != 0) {
      console.log("not exmt");
      fetchDataByLevelTerm();
    } else if (examptype != 0 && term != 0) {
      console.log("not lev");
      fetchDataByTermExamType();
    } else {
      console.log("all");
      setPage(page + 1);
      fetchAllData();
    }
  };
  const onPreviousButton = e => {
    e.preventDefault();
    setPage(page > 1 ? page - 1 : 1);
    if (level != 0 && examptype != 0 && term != 0) {
      console.log("1");
      fetchDataByLevelTermExamtype();
    } else if (level != 0 && examptype != 0) {
      console.log("not term");
      fetchDataByLevelExamType();
    } else if (level != 0 && term != 0) {
      console.log("not exmt");
      fetchDataByLevelTerm();
    } else if (examptype != 0 && term != 0) {
      console.log("not lev");
      fetchDataByTermExamType();
    } else {
      console.log("all");
      fetchAllData();
    }
  };

  const fetchAllData = () => {
    console.log(page);
    axios
      .get(`http://localhost:3001/getQuestion?page=${page}`)
      .then(res => {
        console.log(res.data);
        setQuestionData(res.data);
      })
      .catch(err => console.log(err));
  };

  const fetchDataByTermExamType = () => {
    axios
      .post(`http://localhost:3001/getTermExamtypeQuestion?page=${page}`, {
        term: term,
        examtype: examptype
      })
      .then(res => setQuestionData(res.data))
      .catch(err => console.log(err));
  };
  const fetchDataByLevelExamType = () => {
    axios
      .post(`http://localhost:3001/getLevelExamtypeQuestion?page=${page}`, {
        level: level,
        examtype: examptype
      })
      .then(res => setQuestionData(res.data))
      .catch(err => console.log(err));
  };
  const fetchDataByLevelTerm = () => {
    axios
      .post(`http://localhost:3001/getLevelTermQuestion?page=${page}`, {
        level: level,
        term: term
      })
      .then(res => setQuestionData(res.data))
      .catch(err => console.log(err));
  };
  const fetchDataByLevelTermExamtype = () => {
    axios
      .post(`http://localhost:3001/getLevelTermExamtypeQuestion?page=${page}`, {
        level: level,
        term: term,
        examtype: examptype
      })
      .then(res => setQuestionData(res.data))
      .catch(err => console.log(err));
  };

  const getDataByLevelTerm = e => {
    setPage(1);
    e.preventDefault();
    console.log(level, term, examptype);
    if (level != 0 && examptype != 0 && term != 0) {
      console.log("1");
      fetchDataByLevelTermExamtype();
    } else if (level != 0 && examptype != 0) {
      console.log("not term");
      fetchDataByLevelExamType();
    } else if (level != 0 && term != 0) {
      console.log("not exmt");
      fetchDataByLevelTerm();
    } else if (examptype != 0 && term != 0) {
      console.log("not lev");
      fetchDataByTermExamType();
    } else {
      console.log("all");
      fetchAllData();
    }
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
                <h1>Question Bank</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ereaders-subheader" styles="display: inline-block">
        <div class="ereaders-subheader-text">
          <div class="container">
            <div class="row">
              <div className="col-md-3">
                <div className="row  p-3">
                  <label for="level">Level:</label>

                  <select
                    id="level"
                    onChange={e => setLevel(e.target.value)}
                    name="level"
                  >
                    <option value="0">All</option>
                    <option value="1">Level 1</option>
                    <option value="2">Level 2</option>
                    <option value="3">Level 3</option>
                    <option value="4">Level 4</option>
                  </select>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className="row  p-3">
                  <label for="term">Term:</label>

                  <select
                    id="term"
                    onChange={e => setTerm(e.target.value)}
                    name="term"
                  >
                    <option value="0">All</option>

                    <option value="1">Term 1</option>
                    <option value="2">Term 2</option>
                    <option value="3">Term 3</option>
                  </select>
                </div>
              </div>
              <div className="col-md-3 ">
                <div className="row  p-3">
                  <label for="term">ExamType:</label>

                  <select
                    id="examtype"
                    onChange={e => setExamtype(e.target.value)}
                    name="examtype"
                  >
                    <option value="0">All</option>
                    <option value="1">MidTerm</option>
                    <option value="2">Final</option>
                  </select>
                </div>
              </div>

              <div className="col-md-3 ">
                <div className="p-3">
                  <label for="term">Search</label>

                  <button
                    type="submit"
                    class="btn btn-primary ml-2"
                    onClick={getDataByLevelTerm}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <QuestionIList page={page} bookData={questionData} />
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
export default AllFiles;
