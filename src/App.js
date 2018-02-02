import React, { Component } from 'react';
// import VideoPlayer from './video';
import ReactPlayer from 'react-player'

class App extends Component {
  state = {
    url: 'https://stream-alfa.dropcam.com:443/nexus_aac/d5621f9ea2b64ac492072120811cd838/playlist.m3u8',
  }

  handleNewUrl = (event) => {
    if (event.target.value === "") {
      this.handleClear()
    }
    this.setState({url: event.target.value})
  }

  handleClear = () => {
    this.setState({url: 'https://stream-alfa.dropcam.com:443/nexus_aac/d5621f9ea2b64ac492072120811cd838/playlist.m3u8' })
  }

  render = () => {
    return (<div>
    <ReactPlayer
      url={this.state.url}
      playing
      width='100%'
      controls
      height='100%'
    />
    <input placeholder="input new link" onChange={this.handleNewUrl}/>
    <button onClick={this.handleClear}>clear</button>
  </div>)
  }
}

export default App;
