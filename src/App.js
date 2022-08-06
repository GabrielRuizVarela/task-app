import './App.css';
import React from 'react';
import Overview from './component/Overview';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  deleteItem(id) {
    this.setState(prevState => ({
      items: prevState.items.filter(item => item.id !== id)
    }));
    // update number of items in list
    this.setState(prevState => ({
      items: prevState.items.map((item, index) => {
        if (item.number !== index) {
          item.number = index;
        }
        return item;
      })
    }));
  }

  handleSubmit(event) {
    event.preventDefault();
    const text = event.target.elements.text.value;
    if (text) {
      this.setState(prevState => ({
        items: [...prevState.items, { id: Date.now(), text, number: prevState.items.length }]
      }));
    }
    event.target.text.value = '';
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="text" placeholder="Enter a new item" />
          <button type="submit">Add</button>
        </form>
        <Overview items={this.state.items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}



export default App;
