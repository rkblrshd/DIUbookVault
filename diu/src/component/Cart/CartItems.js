import React from "react";
import cartData from "../../constant/cartItemData";
import CartItemDetails from "./CartItemDetails";
class CartItems extends React.Component {
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

  upDateCartItemData = () => {
    const { item_name, item_price, item_source, quantity } = this.state;
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
    const { item } = this.props;

    return (
      <tbody>
        {item &&
          item.map((item, key) => {
            return <CartItemDetails item={item} key={key} />;
          })}
      </tbody>
    );
  }
}
export default CartItems;
