import React from "react";

class Overview extends React.Component {
  render(props) {
    return (
      <ul>
        {this.props.items.map((item) => {
          return <li key={item.id}>{item.number} {item.text} <button onClick={() => this.props.deleteItem(item.id)}>Delete</button></li>;
        })}
      </ul>
    );
  }
}

export default Overview;