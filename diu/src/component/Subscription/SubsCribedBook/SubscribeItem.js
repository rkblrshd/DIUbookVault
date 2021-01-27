import React from "react";
import Popup from "reactjs-popup";
class SubscribeItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
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
  closeModal = () => {
    console.log(this.state.isOpen);
    this.setState({ isOpen: !this.state.isOpen });
  };

  getDate(time) {
    let numWeeks = 2;
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    var date = new Date(parseInt(time));
    return (
      date.getDate() + " " + months[date.getMonth()] + "," + date.getFullYear()
    );
  }
  getEndDate(time) {
    let numWeeks = 2;
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    var date = new Date(parseInt(time) + 12096e5);
    return (
      date.getDate() + " " + months[date.getMonth()] + "," + date.getFullYear()
    );
  }
  render() {
    const { item } = this.props;
    console.log(item);
    return (
      <>
        <tr>
          <td className="product-col">
            <div className="product">
              <h6 className="product-title">
                <a href="#" onClick={() => this.closeModal()}>
                  {item.fileName}
                </a>
              </h6>
            </div>
          </td>
          <td className="price-col">{this.getDate(item.date)}</td>
          <td className="cartquantity-col">
            {this.getEndDate(item.date)}
          </td>
        </tr>
      </>
    );
  }
}
export default SubscribeItem;
