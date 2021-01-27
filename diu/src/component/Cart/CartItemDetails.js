import React from "react";
import cartData from "../../constant/cartItemData";
import { stat } from "fs";
class CartItemDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fileName: "",
      price: "",
      imgsrc: "",
      cartquantity: ""
    };

    this.upDateCartItemData = this.upDateCartItemData.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  componentWillMount(){
    this.upDateCartItemData()
  }

  upDateCartItemData = () => {
    const { fileName, price, imgsrc, cartquantity } = this.props.item;
    
    this.setState({
      fileName: fileName,
      price: price,
      imgsrc: imgsrc,
      cartquantity: cartquantity
    });
  };

  handleOnChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { price, cartquantity } = this.state;
    const {item} = this.props
    console.log(this.state)
    return (
      <tr>
        <td className="product-col">
          <div className="product">
            <figure className="product-media">
              <a href="#">
                <img src={item.imgsrc} alt="Product image"  width="200" height="200"/>
              </a>
            </figure>

            <h6 className="product-title">
              <a href="#">{item.fileName}</a>
            </h6>
          </div>
        </td>
        <td className="price-col">{item.price}/-</td>
        <td className="cartquantity-col">
          <div className="cart-product-cartquantity">
            <input
              type="number"
              className="form-control"
              value={cartquantity}
              min="1"
              max="10"
              step="1"
              data-decimals="0"
              required
              name="cartquantity"
              onChange={this.handleOnChange}
            />
          </div>
        </td>
        <td className="total-col">{item.price * cartquantity}/-</td>
        {/* <td className="remove-col">
          <button className="btn-remove">
            <i className="icon-close"></i>
          </button>
        </td> */}
      </tr>
    );
  }
}
export default CartItemDetails;
