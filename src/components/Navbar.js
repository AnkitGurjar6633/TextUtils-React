import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <div>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
                <a className="navbar-brand" href="#">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        {/* <Link className="nav-link active" aria-current="page" to="/">Home</Link> */}
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    {/* <li className="nav-item">
                         <Link className="nav-link" to="/about">About</Link> 
                    </li> */}
                    </ul>
                    <form className="d-flex mx-2" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                </div>
                    <div className={`form-check form-switch text-${props.mode === 'light'? 'dark' : 'light'} mx-2`}>
                        <input className="form-check-input" style={{cursor: 'pointer'}} type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
                        <label className="form-check-label" style={{cursor: 'pointer'}} htmlFor="flexSwitchCheckDefault" >{props.mode === 'light'? 'Light' : 'Dark'} Mode</label>
                    </div>
            </div>
        </nav>
    </div>
  );
}


Navbar.propTypes = {
    title: PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title: 'Set Title'
};