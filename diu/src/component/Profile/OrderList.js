import React from "react";
import OrderItem from "./OrderItem";

class OrderList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;

    return (
      <tbody>
        {item &&
          item.map((item, key) => {
            return <OrderItem item={item} key={key} />;
          })}
      </tbody>
    );
  }
}
export default OrderList;
