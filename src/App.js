import React, { Component } from 'react';
import './App.css';
import { getDaysRemainingFromTomorrow, getDurationUntilEndOfCurrentWorkday } from './countdown.js';
import moment from 'moment';

class App extends Component {
  componentDidMount() {
    setInterval( () => {
      this.setState({
        curTime : new Date().toLocaleString()
      })
    },1000)
  }

  render() {
    const days = getDaysRemainingFromTomorrow(moment())
    const daysLabel = days === 1 ? 'DAY' : 'DAYS';

    const timeRemaining = getDurationUntilEndOfCurrentWorkday(moment());
    const hours = timeRemaining.hours();
    const minutes = timeRemaining.minutes();
    const seconds = timeRemaining.seconds();
  
    return (
      <div className="content">
        <div className="countdown-container">
          <h1 className="countdown-days">{days}</h1>
          <p className="countdown-days-label">{daysLabel}</p>
          <h2 className="countdown-time">{hours.toString().padStart(2, '0')}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}</h2>
        </div>
      </div>
    );
  }
}

export default App;
