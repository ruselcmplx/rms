import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <a class="mailto" rel="noopener noreferrer" target="_blank" href="mailto:info@rms.group">
          <img alt="" src="./img/Group.svg" />
        </a>
        <video autoPlay muted playsInline loop id="rms">
          <source src="./video/RMS.mp4" type="video/mp4"/>
          <p>Your browser doesn't support HTML5 video. Here is
            a <a href="./video/RMS.mp4">link to the video</a> instead.</p>
        </video>
        <div className="heh">Согласны? Узнали?</div>
      </div>
    );
  }
}

export default App;
