import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import "./index.scss";

import { Canvas, Sidebar } from './components';

class SongVisualizer extends Component {
  // outOfBounds = (pos, r, limit) => {
  //   let result = false;
    
  //   if ((pos + r) >= limit || (pos - r) <= 0) {
  //     result = true;
  //   }
    
  //   return result;
  // }
  
  // max = arr => {
  //   if (!arr.length) return null;

  //   let max = arr[0];
    
  //   arr.forEach(el => {
  //     if (el > max) {
  //       max = el
  //     }
  //   });
    
  //   return max;
  // }
  
  // randomBetween = (min, max) => {
  //   return (Math.random() * max) - (Math.random() * min);
  // }
  
  // fileChange = e => {
  //   var audio = document.getElementById("audio");
    
  //   var files = e.currentTarget.files;
    
  //   audio.src = URL.createObjectURL(files[0]);
  //   audio.load();
  //   audio.play();
    
  //   var context = new AudioContext();
  //   var src = context.createMediaElementSource(audio);
  //   var analyser = context.createAnalyser();

  //   var canvas = document.getElementById("canvas");
  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;
  //   var ctx = canvas.getContext("2d");

  //   src.connect(analyser);
  //   analyser.connect(context.destination);

  //   analyser.fftSize = 256;

  //   var bufferLength = analyser.frequencyBinCount;
  //   console.log(bufferLength);

  //   var dataArray = new Uint8Array(bufferLength);

  //   var WIDTH = canvas.width;
  //   var HEIGHT = canvas.height;
  //   const speed = .5;
    
  //   let x = WIDTH/2;
  //   let y = HEIGHT/2;
    
  //   let xDir = this.randomBetween(-1, 1) * speed;
  //   let yDir = this.randomBetween(-1, 1) * speed;
    
  //   let frequency = 0;
  //   const freqModifier = 10;

  //   const renderFrame = () => {
  //     requestAnimationFrame(renderFrame);
      
  //     analyser.getByteFrequencyData(dataArray);

  //     ctx.clearRect(0, 0, WIDTH, HEIGHT);
      
  //     const max = this.max(dataArray);
  //     frequency += (max - frequency) / freqModifier;
      
  //     ctx.beginPath();
  //     ctx.arc(x, y, frequency, 0, 2 * Math.PI);
  //     ctx.fillStyle = 'blue';
  //     ctx.strokeStyle = 'lightblue';
      
  //     ctx.fill();
  //     ctx.stroke();
      
  //     if (this.outOfBounds(y, frequency, HEIGHT)) {
  //       yDir = yDir * -1;
  //     } else if (this.outOfBounds(x, frequency, WIDTH)) {
  //       xDir = xDir * -1;
  //     }
      
  //     x += xDir;
  //     y += yDir;

  //   }

  //   audio.play();
  //   renderFrame();
  // }
  
  
  render() {
    return (
      <div id='song-visualizer'>
        <Canvas />
        <Sidebar />
        {/* <input type="file" onChange={this.fileChange} accept="audio/*"/>
        <audio id="audio" controls></audio>
        <canvas id="canvas"></canvas> */}
      </div>
    );
  }
}

SongVisualizer.propTypes = {};

SongVisualizer.defaultProps = {};

export default SongVisualizer;
