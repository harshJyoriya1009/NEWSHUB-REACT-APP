import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from "react-top-loading-bar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  pageSize=10;

  state={
    progress:0
  }

  setProgress=(progress)=>{
    this.setState({progress: progress})
  }
  render() {
    return (
     
      <div>
        <Router>
        <Navbar/>

        <LoadingBar
        height={2.5}
        color="#f11946"
        progress={this.state.progress}     
         />

        <Routes>
            <Route path="/business" element={<News setProgress={this.setProgress}  key="business" pageSize={this.pageSize} country="us" category="business" />} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress}  key="entertainment" pageSize={this.pageSize} country="us" category="entertainment" />} />
            <Route path="/general" element={<News setProgress={this.setProgress}  key="general" pageSize={this.pageSize} country="us" category="general" />} />
            <Route path="/health" element={<News setProgress={this.setProgress}  key="health" pageSize={this.pageSize} country="us" category="health" />} />
            <Route path="/science" element={<News setProgress={this.setProgress}  key="science" pageSize={this.pageSize} country="us" category="science" />} />
            <Route path="/sports" element={<News setProgress={this.setProgress}  key="sports" pageSize={this.pageSize} country="us" category="sports" />} />
            <Route path="/technology" element={<News setProgress={this.setProgress}  key="technology" pageSize={this.pageSize} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>


      
    )
  }
}

