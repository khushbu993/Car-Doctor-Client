import React from 'react';
import './TopNav.css'
import logo from '../../images/logo.png';
import { Link } from 'react-router-dom';

const TopNav = () => {
    return (
        <div className="top-nav-container">
            <nav className="navbar navbar-expand-lg navbar-light p-5">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <img className="logo img-fluid" src={logo} alt="" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="menu-bar navbar-nav ml-auto mb-2 mb-lg-0 pr-5">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/"><span className="nav-brand">HOME</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about"><span className="nav-brand">ABOUT</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/services" ><span className="nav-brand">SERVICES</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog" ><span className="nav-brand">BLOG</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact" ><span className="nav-brand">CONTACT</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin" ><span className="nav-brand">ADMIN</span></Link>
                            </li>
                        </ul>
                        <div>
                            <Link to="/login">
                                <button type="button" className="btn btn-brand" style={{ color: 'whitesmoke', fontWeight: '600', border: 'none' }}>LOG IN</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default TopNav;