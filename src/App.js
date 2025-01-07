import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
  c="Harsh"
  render() {
    return (
      <>
      <div>
        <Navbar/>
        <News pageSize={6} country="us" category="health"/>
      </div>


{/* <Router>
        <div>
          Navbar is always visible regardless of the route
          <Navbar />
          <Routes>
            Define the Route for the News component
            <Route path="/" element={<News pageSize={6} country="us" category="health" />} />
          </Routes>
        </div>
      </Router> */}
      </>
    )
  }
}

