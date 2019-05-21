import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import "./index.scss";

class SongVisualizer extends Component {
  fileChange = e => {
    console.log('change *****---->>>');
    var audio = document.getElementById("audio");
    
    var files = e.currentTarget.files;
    
    audio.src = URL.createObjectURL(files[0]);
    audio.load();
    audio.play();
    
    var context = new AudioContext();
    var src = context.createMediaElementSource(audio);
    var analyser = context.createAnalyser();

    var canvas = document.getElementById("canvas");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext("2d");

    src.connect(analyser);
    analyser.connect(context.destination);

    analyser.fftSize = 256;

    var bufferLength = analyser.frequencyBinCount;
    console.log(bufferLength);

    var dataArray = new Uint8Array(bufferLength);

    var WIDTH = canvas.width;
    var HEIGHT = canvas.height;

    var barWidth = (WIDTH / bufferLength) * 2.5;
    var barHeight;
    var x = 0;

    function renderFrame() {
      requestAnimationFrame(renderFrame);

      x = 0;

      analyser.getByteFrequencyData(dataArray);

      ctx.fillStyle = "#000";
      ctx.fillRect(0, 0, WIDTH, HEIGHT);

      for (var i = 0; i < bufferLength; i++) {
        
        barHeight = dataArray[i];
        
        var r = barHeight + (25 * (i/bufferLength));
        var g = 250 * (i/bufferLength);
        var b = 50;

        ctx.fillStyle = "rgb(" + r + "," + g + "," + b + ")";
        ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

        x += barWidth + 1;
      }
    }

    audio.play();
    renderFrame();
  }
  
  
  render() {
    return (
      <div>
        <input type="file" onChange={this.fileChange} accept="audio/*"/>
        <audio id="audio" controls></audio>
        <canvas id="canvas"></canvas>
      </div>
    );
  }
}

SongVisualizer.propTypes = {};

SongVisualizer.defaultProps = {};

export default SongVisualizer;
