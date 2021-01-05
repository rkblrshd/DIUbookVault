import React from "react";
import cartData from "../../constant/cartItemData";
import { stat } from "fs";
class CartItemDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item_name: "",
      item_price: "",
      item_source: "",
      quantity: ""
    };

    this.upDateCartItemData = this.upDateCartItemData.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
  }
  componentWillMount(){
    this.upDateCartItemData()
  }

  upDateCartItemData = () => {
    const { item_name, item_price, item_source, quantity } = this.props.item;
    
    this.setState({
      item_name: item_name,
      item_price: item_price,
      item_source: item_source,
      quantity: quantity
    });
  };

  handleOnChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { item_price, quantity } = this.state;
    const {item} = this.props
    console.log(this.state)
    return (
      <tr>
        <td className="product-col">
          <div className="product">
            <figure className="product-media">
              <a href="#">
                <img src={item.item_source} alt="Product image" />
              </a>
            </figure>

            <h4 className="product-title">
              <a href="#">{item.item_name}</a>
            </h4>
          </div>
        </td>
        <td className="price-col">{item.item_price}/-</td>
        <td className="quantity-col">
          <div className="cart-product-quantity">
            <input
              type="number"
              className="form-control"
              value={quantity}
              min="1"
              max="10"
              step="1"
              data-decimals="0"
              required
              name="quantity"
              onChange={this.handleOnChange}
            />
          </div>
        </td>
        <td className="total-col">{item.item_price * quantity}/-</td>
        <td className="remove-col">
          <button className="btn-remove">
            <i className="icon-close"></i>
          </button>
        </td>
      </tr>
    );
  }
}
export default CartItemDetails;
