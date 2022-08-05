import React from "react";

class Overview extends React.Component {
  render(props) {
    return (
      <ul>
        {this.props.items.map((item) => {
          return <li key={item.id}>{item.text}</li>;
        })}
      </ul>
    );
  }
}

export default Overview;