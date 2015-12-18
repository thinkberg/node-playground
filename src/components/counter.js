import React, {Component} from 'react';

export class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};
    this.interval = setInterval(() => this.tick(), 1000);
  }

  tick() {
    this.setState({
      counter: this.state.counter + this.props.increment
    });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <button className="primary-button pure-button">
        Counter {this.props.increment}: {this.state.counter}
      </button>
    );
  }
}
