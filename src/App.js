import React, { Component } from 'react';
import ReactPlayer from 'react-player'

class App extends Component {
  static defaultProps = {
    url: 'https://stream-alfa.dropcam.com:443/nexus_aac/d5621f9ea2b64ac492072120811cd838/playlist.m3u8',
  }

  render = () => {
    return (<div>
    <ReactPlayer
      url={this.props.url}
      playing
      width='100%'
      controls
      height='100%'
    />
  </div>)
  }
}

export default App;
