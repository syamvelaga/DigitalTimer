// // Write your code here

import {Component} from 'react'
import './index.css'

export default class DigitalTimer extends Component {
  state = {
    timer: 25 * 60,
    isRunning: false,
  }

  // Initialize timerId as null

  componentDidMount() {
    this.timerId = setInterval(() => {
      const {isRunning} = this.state

      if (isRunning) {
        this.setState(prev => ({timer: prev.timer - 1}))
      }
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  resetEvent = () => {
    this.setState({timer: 25 * 60, isRunning: false})
  }

  startPauseEvent = () => {
    this.setState(prevState => ({
      isRunning: !prevState.isRunning,
    }))
  }

  decrement = () => {
    this.setState(prev => ({
      timer: prev.timer - 1 * 60,
    }))
  }

  increament = () => {
    this.setState(prev => ({
      timer: prev.timer + 1 * 60,
    }))
  }

  render() {
    const {timer} = this.state
    const mintues = Math.floor(timer / 60)
    const seconds = timer % 60
    const {isRunning} = this.state

    return (
      <div className="mainBg">
        <h1>Digital Timer</h1>
        <div className="inner-bg">
          <div className="bgImg">
            <div className="round">
              <h1>
                {mintues}:{seconds < 10 ? '0' : ''}
                {seconds}
              </h1>
              <p>{isRunning ? 'Running' : 'Paused'}</p>
            </div>
          </div>
          <div className="buttons-bg">
            <div className="start-pause-reset-bg">
              <div className="play-icon-bg">
                <img
                  onClick={this.startPauseEvent}
                  className="play-icon"
                  src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                  alt="play icon"
                />
                <button className="star-reset-bt" type="button">
                  Start
                </button>
              </div>
              <div className="play-icon-bg">
                <img
                  onClick={this.resetEvent}
                  className="play-icon"
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt=" reset icon"
                />
                <button className="star-reset-bt" type="button">
                  Reset
                </button>
              </div>
            </div>
            <p>Set Timer Limit</p>
            <div className="lower-bg">
              <button
                onClick={this.decrement}
                className="star-reset-bt"
                type="button"
              >
                -
              </button>
              <p className="para-25-bg">{mintues} </p>
              <button
                onClick={this.increament}
                className="star-reset-bt"
                type="button"
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
