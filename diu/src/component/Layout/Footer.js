import React from "react";
class Footer extends React.Component {
  render() {
    return (
      <div>
        <footer id="ereaders-footer" class="ereaders-footer-one">
          <div class="ereaders-footer-widget">
            <div class="container"></div>
          </div>

          <div class="ereaders-copyright">
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <p>
                    <i class="fa fa-copyright"></i> 2020, Thesis Final - by{" "}
                    <a href="index-2.html">Rakib & Tafsir</a>
                  </p>
                  <ul class="footer-social-network">
                    <li>
                      <a
                        href="https://en-gb.facebook.com/login/"
                        class="fa fa-facebook"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://www.linkedin.com/uas/login"
                        class="fa fa-linkedin"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://twitter.com/login?lang=en"
                        class="fa fa-twitter"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://www.pinterest.com/login/"
                        class="fa fa-pinterest-p"
                      ></a>
                    </li>
                    <li>
                      <a
                        href="https://en-gb.facebook.com/login/"
                        class="fa fa-google-plus"
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
export default Footer;
