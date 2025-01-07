import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  c="Harsh"
  render() {
    return (
      <div>
        <Navbar/>
        <News pageSize={6} country="us" category="health"/>
      </div>
    )
  }
}

