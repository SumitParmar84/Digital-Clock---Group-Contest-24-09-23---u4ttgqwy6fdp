import React, { Component } from 'react';

class DigitalClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleString(),
    };
    this.intervalId = null;
  }

  updateTime = () => {
    this.setState({
      time: new Date().toLocaleString(),
    });
  };

  componentDidMount() {
    // Start updating time every second
    this.intervalId = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    // Clear the interval when the component is unmounted
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div className="date-time">
        {this.state.time}
      </div>
    );
  }
}

export default DigitalClock;
