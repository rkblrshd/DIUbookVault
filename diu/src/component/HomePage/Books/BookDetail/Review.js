import React from "react";
class Review extends React.Component {
  render() {
    return (
      <div class="comments-area ereaders-book-reply">
        <h2 class="ereaders-section-heading">Book Reviews</h2>
        <ul class="comment-list">
          <li>
            <div class="thumb-list">
              <figure>
                <img alt="" src="./assets/extra-images/comment-img1.jpg" />
              </figure>
              <div class="text-holder">
                <h6>Sarena Doe</h6>
                <time class="post-date" datetime="2008-02-14 20:00">
                  2 Hours Ago
                </time>
                <br></br>
                
                <p>
                Nice
                </p>
                <a class="comment-reply-link" href="#">
                  Like
                </a>
                <a class="comment-reply-link" href="#">
                  Reply
                </a>
              </div>
            </div>
            <ul class="children">
              <li>
                <div class="thumb-list">
                  <figure>
                    <img alt="" src="./assets/extra-images/comment-img2.jpg" />
                  </figure>
                  <div class="text-holder">
                    <h6>Sarena Doe</h6>
                    <time class="post-date" datetime="2008-02-14 20:00">
                      2 Hours Ago
                    </time>
                    <br></br>
                   
                    <p>
                     GOOD
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </li>
          <li>
            <div class="thumb-list">
              <figure>
                <img alt="" src="./assets/extra-images/comment-img3.jpg" />
              </figure>
              <div class="text-holder">
                <h6>Sarena Doe</h6>
                <time class="post-date" datetime="2008-02-14 20:00">
                  2 Hours Ago
                </time>
                <br></br>
            
                <p>
              Fine
                </p>
                <a class="comment-reply-link" href="#">
                  Like
                </a>
                <a class="comment-reply-link" href="#">
                  Reply
                </a>
              </div>
            </div>
          </li>
        </ul>

        <div class="comment-respond">
          <h2 class="ereaders-section-heading">lEAVE a rEPLY</h2>
          <form>
            <p class="ereaders-full-form">
              <textarea name="comment" placeholder="Comment"></textarea>
              <i class="fa fa-pencil-square-o"></i>
            </p>
            <p>
              <input
                type="text"
                value="Name"
                onblur="if(this.value == '') { this.value ='Name'; }"
                onfocus="if(this.value =='Name') { this.value = ''; }"
              />
              <i class="fa fa-user"></i>
            </p>
            
            <p>
              <input type="submit" value="Submit Now" class="submit" />
            </p>
          </form>
        </div>
      </div>
    );
  }
}

export default Review;
