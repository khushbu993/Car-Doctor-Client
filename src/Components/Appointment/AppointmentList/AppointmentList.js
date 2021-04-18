import React from 'react';
import './AppointmentList.css';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faCommentDots, faHome, faListAlt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import service1 from '../../images/service-1.png';

const AppointmentList = () => {
    return (
        <div className="appointment-list-container container-fluid">
            <div className="row">
                <div className="left-panel col-md-3">
                    <img src={logo} alt="" />
                    <div className="sidebar">
                        <Link className="nav-link sidebar-menu" to="/">
                            <FontAwesomeIcon icon={faHome} /> Home
                        </Link>
                        <Link className="nav-link sidebar-menu" to="/appointment">
                            <FontAwesomeIcon icon={faCalendarCheck} /> Appointment
                        </Link>
                        <Link className="nav-link sidebar-menu" to="/appointmentList">
                            <FontAwesomeIcon icon={faListAlt} /> Appointment List
                        </Link>
                        <Link className="nav-link sidebar-menu" to="/review">
                            <FontAwesomeIcon icon={faCommentDots} /> Review
                        </Link>
                    </div>
                </div>
                <div className="right-panel col-md-9">
                    <h3>Appointment List</h3>
                    <div className="d-flex justify-content-around">
                        <div className="col-md-4">
                            <div className="appointment-list-card">
                                <div className="list-img d-flex">
                                    <img src={service1} alt="" />
                                    <button>Pending</button>
                                </div>
                                <div className="list-title">
                                    <h6>ENGINE DIAGNOSTIC</h6>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus velit odit, nulla nostrum esse error.</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4">
                            <div className="appointment-list-card">
                                <div className="list-img d-flex">
                                    <img src={service1} alt="" />
                                    <button style={{backgroundColor: 'green'}}>DONE</button>
                                </div>
                                <div className="list-title">
                                    <h6>ENGINE DIAGNOSTIC</h6>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus velit odit, nulla nostrum esse error.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppointmentList;