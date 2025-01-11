import './App.css';

import React, { useState} from 'react'
// import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from "react-top-loading-bar";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


const App=()=>{
  let pageSize=10;
  // apiKey= process.env.MY_API_KEY
  const [progress, setProgress] = useState(0)
// export default class App extends Component {

  // state={
  //   progress:0
  // }

  // setProgress=(progress)=>{
  //   this.setState({progress: progress})
  // }
  // render() {
    return (
     
      <div>
        <Router>
        <Navbar/>

        <LoadingBar
        height={2.5}
        color="#f11946"
        progress={progress}     
         />

        <Routes>
            {/* <Route path="/business" element={<News setProgress={this.setProgress}  key="business" pageSize={this.pageSize} country="us" category="business" />} />
            <Route path="/entertainment" element={<News setProgress={this.setProgress}  key="entertainment" pageSize={this.pageSize} country="us" category="entertainment" />} />
            <Route path="/general" element={<News setProgress={this.setProgress}  key="general" pageSize={this.pageSize} country="us" category="general" />} />
            <Route path="/health" element={<News setProgress={this.setProgress}  key="health" pageSize={this.pageSize} country="us" category="health" />} />
            <Route path="/science" element={<News setProgress={this.setProgress}  key="science" pageSize={this.pageSize} country="us" category="science" />} />
            <Route path="/sports" element={<News setProgress={this.setProgress}  key="sports" pageSize={this.pageSize} country="us" category="sports" />} />
            <Route path="/technology" element={<News setProgress={this.setProgress}  key="technology" pageSize={this.pageSize} country="us" category="technology" />} /> */}


            <Route path="/business" element={<News setProgress={setProgress}  key="business" pageSize={pageSize} country="us" category="business" />} />
            <Route path="/entertainment" element={<News setProgress={setProgress}  key="entertainment" pageSize={pageSize} country="us" category="entertainment" />} />
            <Route path="/general" element={<News setProgress={setProgress}  key="general" pageSize={pageSize} country="us" category="general" />} />
            <Route path="/health" element={<News setProgress={setProgress}  key="health" pageSize={pageSize} country="us" category="health" />} />
            <Route path="/science" element={<News setProgress={setProgress}  key="science" pageSize={pageSize} country="us" category="science" />} />
            <Route path="/sports" element={<News setProgress={setProgress}  key="sports" pageSize={pageSize} country="us" category="sports" />} />
            <Route path="/technology" element={<News setProgress={setProgress}  key="technology" pageSize={pageSize} country="us" category="technology" />} />
          </Routes>
        </Router>
      </div>


      
    )
  // }   --Render function closing tag
}

export default App;