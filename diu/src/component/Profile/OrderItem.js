import React from "react";
import Popup from "reactjs-popup";
class OrderItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }
  }

  getStatus(status) {
    switch (status) {
      case "0":
        return "Pending";
      case "1":
        return "Confirm";
      case "2":
        return "Reject";
    }
  }
  closeModal=()=> {
    console.log(this.state.isOpen)
    this.setState({ isOpen: !this.state.isOpen });
  }
  render() {
    const { item } = this.props;
    return (
      <>
        <tr>
          <td className="product-col">
            <div className="product">
              <h6 className="product-title">
                <a
                  href="#"
                  onClick={() => this.closeModal()}
                >
                  {item.orderid}
                </a>
              </h6>
            </div>
          </td>
          <td className="price-col">{item.price}/-</td>
          <td className="cartquantity-col">
            {this.getStatus(item.orderstatus)}
          </td>
        </tr>
        <Popup
          open={this.state.isOpen}
          closeOnDocumentClick
          onClose={this.closeModal}
        >
          <div className="modal">
            <a className="close" onClick={this.closeModal}>
              &times;
            </a>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae
            magni omnis delectus nemo, maxime molestiae dolorem numquam
            mollitia, voluptate ea, accusamus excepturi deleniti ratione
            sapiente! Laudantium, aperiam doloribus. Odit, aut.
          </div>
        </Popup>
      </>
    );
  }
}
export default OrderItem;
