import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'aframe';
import {Scene, Entity, Sky} from 'aframe-react'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Scene>
          <Entity geometry={{primitive:'sphere', radius: 10}}
           material={{color:'red'}}
           position={[0,0,-50]}/>
          <Entity camera geometry={{primitive:'sphere', radius: 10}}
           material={{color:'red'}}
           position={[0,0,0]}/>
        </Scene>
      </div>
    );
  }
}

export default App;
