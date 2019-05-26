import React, { Component } from 'react';
import './Video.css';

class Video extends Component {
  render() {
    return (
      <div className="Video">
        <video autoPlay muted playsInline loop id="rms">
          <source src="./video/RMS.mp4" type="video/mp4"/>
          <p>Your browser doesn't support HTML5 video. Here is
            a <a href="./video/RMS.mp4">link to the video</a> instead.</p>
        </video>
      </div>
    );
  }
}

export default Video;
