import React from 'react'

class DigitalClicker extends React.Component {
  constructor(props) {
    super(props)

    this.handleClick = this.handleClick.bind(this)

    this.state = {
      timesClicked: 0
    }
  }

  handleClick() {
    let clickCount = this.state.timesClicked + 1
    this.setState({
      timesClicked: clickCount
    })
  }

  render() {
    return(
      <div>
        <button onClick={this.handleClick}>{this.state.timesClicked}</button>
      </div>
    )
  }
}

module.exports = DigitalClicker
