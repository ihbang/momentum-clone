import React from 'react';
import clockStyles from './Clock.module.css';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ date: new Date() });
  }

  render() {
    const { date } = this.state;
    return (
      <div className={clockStyles.container}>
        {date.toTimeString().substring(0, 8)}
      </div>
    );
  }
}

export default Clock;
