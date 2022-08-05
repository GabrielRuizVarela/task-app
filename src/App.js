import './App.css';
import React from 'react';
import Overview from './component/Overview';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [] };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const text = event.target.elements.text.value;
    if (text) {
      this.setState(prevState => ({
        items: [...prevState.items, { id: Date.now(), text }]
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
        <Overview items={this.state.items} />
      </div>
    );
  }
}



export default App;
