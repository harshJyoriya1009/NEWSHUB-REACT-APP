import React, { Component } from 'react'
                                       
export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className={`navbar navbar-expand-lg navbar-light bg-light navbar navbar-dark bg-dark`}>
                    <div className="container-fluid">
                    <div className="navbar-brand" to="/">NewsHub</div>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        
                        </li>
                        <li className="nav-item">
                            <a className='nav-link active' aria-current='page' href="/about">About</a>
                            
                        </li>

                        <li className="nav-item"><a className='nav-link active' aria-current='page' href="/about">About</a></li>
                        <li className="nav-item"><a className='nav-link active' aria-current='page' href="/about">Business</a></li>
                        <li className="nav-item"><a className='nav-link active' aria-current='page' href="/about">Entertainment</a></li>
                        <li className="nav-item"><a className='nav-link active' aria-current='page' href="/about">General</a></li>
                        <li className="nav-item"><a className='nav-link active' aria-current='page' href="/about">Health</a></li>
                        <li className="nav-item"><a className='nav-link active' aria-current='page' href="/about">Science</a></li>
                        <li className="nav-item"><a className='nav-link active' aria-current='page' href="/about">Sports</a></li>
                        <li className="nav-item"><a className='nav-link active' aria-current='page' href="/about">Technology</a></li>


                        </ul> 
                    </div>
                    </div>
                    </nav>
      </div>
    )
  }
}

export default Navbar
