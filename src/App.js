import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  c="Harsh"
  render() {
    return (
     
      <div>
        <Router>
        <Navbar/>
        {/* <News pageSize={6} country="us" category="science"/> */}

        {/* <Switch>
          <Route path="/business"><News pageSize={6} country="us" category="business"/></Route>
          <Route path="/entertainment"><News pageSize={6} country="us" category="entertainment"/></Route>
          <Route path="/general"><News pageSize={6} country="us" category="general"/></Route>
          <Route path="/health"><News pageSize={6} country="us" category="health"/></Route>
          <Route path="/science"><News pageSize={6} country="us" category="science"/></Route>
          <Route path="/sports"><News pageSize={6} country="us" category="sports"/></Route>
          <Route path="/technology"><News pageSize={6} country="us" category="technology"/></Route>
        </Switch> */}

        <Routes>
            <Route path="/business" element={<News key="business" pageSize={6} country="us" category="business" />} />
            <Route path="/entertainment" element={<News key="entertainment" pageSize={6} country="us" category="entertainment" />} />
            <Route path="/general" element={<News key="general" pageSize={6} country="us" category="general" />} />
            <Route path="/health" element={<News key="health" pageSize={6} country="us" category="health" />} />
            <Route path="/science" element={<News key="science" pageSize={6} country="us" category="science" />} />
            <Route path="/sports" element={<News key="sports" pageSize={6} country="us" category="sports" />} />
            <Route path="/technology" element={<News key="technology" pageSize={6} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>


      
    )
  }
}

