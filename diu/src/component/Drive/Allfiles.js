import React from "react";
import TopNav from "../Layout/TopNav";
import Footer from "../Layout/Footer";
class Allfiles extends React.Component {
  render() {
    return (
      <div className="ereaders-main-wrapper">
        <TopNav />{" "}
        <div class="content-page1">
          <div class="ereaders-main-section">
            <div class="row">
              <div class="col-lg-12">
                <div class="card card-block card-stretch card-transparent">
                  <div class="card-header d-flex justify-content-between pb-0">
                    <div class="header-title">
                      <h4 class="card-title">Images</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="card card-block card-stretch card-height">
                  <div class="card-body image-thumb ">
                    <div class="mb-4 text-center p-3 rounded iq-thumb">
                      <a
                        class="image-popup-vertical-fit"
                        href="./assets/images/layouts/page-1/01.png"
                      >
                        <img
                          src="./assets/images/layouts/page-1/01.png"
                          class="img-fluid"
                          alt="images"
                        />
                        <div class="iq-image-overlay"></div>
                      </a>
                    </div>
                    <h6>Alexa.jpeg</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="card card-block card-stretch card-height">
                  <div class="card-body image-thumb">
                    <div class="mb-4 text-center p-3 rounded iq-thumb">
                      <a
                        class="image-popup-vertical-fit"
                        href="./assets/images/layouts/page-1/02.png"
                      >
                        <img
                          src="./assets/images/layouts/page-1/02.png"
                          class="img-fluid"
                          alt="images"
                        />
                        <div class="iq-image-overlay"></div>
                      </a>
                    </div>
                    <h6>Eliminator.png</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="card card-block card-stretch card-height">
                  <div class="card-body image-thumb">
                    <div class="mb-4 text-center p-3 rounded iq-thumb">
                      <a
                        class="image-popup-vertical-fit"
                        href="./assets/images/layouts/page-1/03.png"
                      >
                        <img
                          src="./assets/images/layouts/page-1/03.png"
                          class="img-fluid"
                          alt="images"
                        />
                        <div class="iq-image-overlay"></div>
                      </a>
                    </div>
                    <h6>Screenshot.svg</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="card card-block card-stretch card-height">
                  <div class="card-body image-thumb">
                    <div class="mb-4 text-center p-3 rounded iq-thumb">
                      <a
                        class="image-popup-vertical-fit"
                        href="./assets/images/layouts/page-1/04.png"
                      >
                        <img
                          src="./assets/images/layouts/page-1/04.png"
                          class="img-fluid"
                          alt="images"
                        />
                        <div class="iq-image-overlay"></div>
                        <div class="overlay-img-icon">
                          <i class="las la-play-circle"></i>
                        </div>
                      </a>
                    </div>
                    <h6>Video.mp4</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="card card-block card-stretch card-transparent">
                  <div class="card-header d-flex justify-content-between pb-0">
                    <div class="header-title">
                      <h4 class="card-title">Documents</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="card card-block card-stretch card-height">
                  <div class="card-body image-thumb">
                    <div class="mb-4 text-center p-3 rounded iq-thumb">
                      <div class="iq-image-overlay"></div>
                      <a
                        href="#"
                        data-title="Mobile-plan.pdf"
                        data-load-file="file"
                        data-load-target="#resolte-contaniner"
                        data-url="./assets/vendor/doc-viewer/files/demo.pdf"
                        data-toggle="modal"
                        data-target="#exampleModal"
                        data-title="alexa5.html"
                      >
                        <img
                          src="./assets/images/layouts/page-1/pdf.png"
                          class="img-fluid"
                          alt="image1"
                        />
                      </a>
                    </div>
                    <h6>Mobile-plan.pdf</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="card card-block card-stretch card-height">
                  <div class="card-body image-thumb">
                    <div class="mb-4 text-center p-3 rounded iq-thumb">
                      <div class="iq-image-overlay"></div>
                      <a
                        href="#"
                        data-title="Strategy.docx"
                        data-load-file="file"
                        data-load-target="#resolte-contaniner"
                        data-url="./assets/vendor/doc-viewer/files/demo.docx"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        <img
                          src="./assets/images/layouts/page-1/doc.png"
                          class="img-fluid"
                          alt="image1"
                        />
                      </a>
                    </div>
                    <h6>Strategy.docx</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="card card-block card-stretch card-height">
                  <div class="card-body image-thumb">
                    <div class="mb-4 text-center p-3 rounded iq-thumb">
                      <div class="iq-image-overlay"></div>
                      <a
                        href="#"
                        data-title="Web.xlsx"
                        data-load-file="file"
                        data-load-target="#resolte-contaniner"
                        data-url="./assets/vendor/doc-viewer/files/demo.xlsx"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        <img
                          src="./assets/images/layouts/page-1/xlsx.png"
                          class="img-fluid"
                          alt="image1"
                        />
                      </a>
                    </div>
                    <h6>Web.xlsx</h6>
                  </div>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 col-sm-6">
                <div class="card card-block card-stretch card-height">
                  <div class="card-body image-thumb">
                    <div class="mb-4 text-center p-3 rounded iq-thumb">
                      <div class="iq-image-overlay"></div>
                      <a
                        href="#"
                        data-title="Testing.pptx"
                        data-load-file="file"
                        data-load-target="#resolte-contaniner"
                        data-url="./assets/vendor/doc-viewer/files/demo.pptx"
                        data-toggle="modal"
                        data-target="#exampleModal"
                      >
                        <img
                          src="./assets/images/layouts/page-1/ppt.png"
                          class="img-fluid"
                          alt="image1"
                        />
                      </a>
                    </div>
                    <h6>Testing.pptx</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}
export default Allfiles;
