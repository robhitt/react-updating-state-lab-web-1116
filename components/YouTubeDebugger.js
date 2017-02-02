import React from 'react'

class YouTubeDebugger extends React.Component {
  constructor() {
    super()

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }

    this.clickBitRateHandler = this.clickBitRateHandler.bind(this)
    this.clickResolutionHandler = this.clickResolutionHandler.bind(this)
  }

  clickBitRateHandler(){
    this.setState({
      settings: Object.assign({}, this.state.settings, {bitrate: 12})
    })
  }

  clickResolutionHandler() {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.video, {resolution: '720p'})
      })
    })
  }

  render() {
    return(
      <div>
        <button className='bitrate' onClick={this.clickBitRateHandler}></button>
        <button className='resolution' onClick={this.clickResolutionHandler}></button>
      </div>
    )
  }
}

module.exports = YouTubeDebugger
