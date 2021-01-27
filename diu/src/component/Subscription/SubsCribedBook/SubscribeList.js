import React from "react";
import SubscribeItem from "./SubscribeItem";

class SubscrineList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;

    return (
      <tbody>
        {item &&
          item.map((item, key) => {
            return <SubscribeItem item={item} key={key} />;
          })}
      </tbody>
    );
  }
}
export default SubscrineList;
