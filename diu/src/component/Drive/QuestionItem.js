import React from "react";
import history from "../../helpers/history";
import axios from "axios";
import { connect } from "react-redux";
class QuestionItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleAddToCartButton = this.handleAddToCartButton.bind(this);
  }

  handleAddToCartButton = e => {
    e.preventDefault();
    // history.push("/cart_details");
    const { item, userDetails } = this.props;

    axios
      .post("http://localhost:3001/addtocart", {
        bookid: item.bookid,
        userid: userDetails.userid
      })
      .then(res => console.log(res))
      .catch(err => console.log(err));
  };

  bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes === 0) return '0 Byte';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    return Math.round(bytes / Math.pow(1024, i), 2) + ' ' + sizes[i];
 }
  getImageSource = (type) =>{

    switch(type){
        case 'pdf': return "./assets/images/pdf.png"
        case 'ppt': return "./assets/images/ppt.jpg"
        case 'image': return "./assets/images/image.jpg"
        default: return "./assets/images/file.jpg"
    }
  }

  render() {
    const { item } = this.props;

    return (
      <li class="col-md-3 ml-5 mr-5">
        <div>
          <a href={item.fileLocation} > 
            <img src={this.getImageSource(item.type)} alt="" height='150' width='150'/>
          </a>
        </div>
        <div class="ereaders-book-grid-text">
          <h2>
            <a href={item.fileLocation} >
              {item.fileName}
            </a>
          </h2>
          <span>{this.bytesToSize(item.size)}</span>
          <div>
            <a
              href={item.fileLocation}
              class="ereaders-simple-btn ereaders-bgcolor mt-5 "
              
            >
              Download
            </a>
          </div>
        </div>
      </li>
    );
  }
}

function mapState(state) {
  const { userDetails } = state.userInfo;
  return { userDetails };
}

const actionCreators = {};
export default connect(mapState, actionCreators)(QuestionItem);
