// // Write your code here

import {Component} from 'react'
import './index.css'

export default class DigitalTimer extends Component {
  state = {
    initialTimer: 25,
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
      initialTimer: prev.initialTimer - 1,
    }))
  }

  increament = () => {
    this.setState(prev => ({
      timer: prev.timer + 1 * 60,
      initialTimer: prev.initialTimer + 1,
    }))
  }

  render() {
    const {timer, initialTimer} = this.state
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
              <button
                onClick={this.startPauseEvent}
                type="button"
                className="play-icon-bg star-reset-bt"
              >
                {isRunning ? (
                  <img
                    className="play-icon"
                    src="https://assets.ccbp.in/frontend/react-js/pause-icon-img.png"
                    alt="pause icon"
                  />
                ) : (
                  <img
                    className="play-icon"
                    src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
                    alt="play icon"
                  />
                )}

                {isRunning ? 'Pause' : 'Start'}
              </button>

              <button
                onClick={this.resetEvent}
                type="button"
                className="star-reset-bt play-icon-bg"
              >
                <img
                  className="play-icon"
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                  alt=" reset icon"
                />
                Reset
              </button>
            </div>
            <p>Set Timer Limit</p>
            <div className="lower-bg">
              <button
                onClick={this.decrement}
                className="star-reset-bt"
                type="button"
                disabled={isRunning}
              >
                -
              </button>
              <p className="para-25-bg">{initialTimer} </p>
              <button
                onClick={this.increament}
                className="star-reset-bt"
                type="button"
                disabled={isRunning}
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
