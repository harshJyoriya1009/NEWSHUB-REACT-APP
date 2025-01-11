import React from 'react'
// import React, { Component } from 'react'
import loading from './loading.gif'

const Spinner=()=>{

// export class Spinner extends Component {
  // render() {
    return (
      <div className='text-center'>
        <img src={loading} alt="loading" />
      </div>
    )
  // }   -Render function ending
}

export default Spinner