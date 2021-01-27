import React from "react";
import TopNav from "../../../Layout/TopNav";
import BookImagePanel from "./BookImagePanel";
import BookDescription from "./BookDescription";
import Review from "./Review";
import history from "../../../../helpers/history";
import Footer from "../../../Layout/Footer";
class Details extends React.Component {
  render() {
    const {item} = this.props.location.state
    return (
      <div class="ereaders-main-wrapper">
        <TopNav />

        <div class="ereaders-subheader">
          <div class="ereaders-breadcrumb ereaders-book-breadcrumb">
            <div class="container">
              <div class="row">
                <div class="col-md-12"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="ereaders-main-content ereaders-content-padding">
          <div class="ereaders-main-section">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <BookImagePanel item={item}/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Details;
