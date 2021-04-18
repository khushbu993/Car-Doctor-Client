import React from 'react';
import './OrderList.css';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlusSquare, faShoppingBag, faThLarge, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const OrderList = () => {
    return (
        <div className="order-list-container container-fluid">
            <div className="row">
                <div className="left-panel col-md-3">
                    <img src={logo} alt="" />
                    <div className="sidebar">
                        <Link className="nav-link sidebar-menu" to="/">
                            <FontAwesomeIcon icon={faHome} /> Home
                        </Link>
                        <Link className="nav-link sidebar-menu" to="/orderList">
                            <FontAwesomeIcon icon={faShoppingBag} /> Order List
                        </Link>
                        <Link className="nav-link sidebar-menu" to="/addService">
                            <FontAwesomeIcon icon={faPlusSquare} /> Add Service
                        </Link>
                        <Link className="nav-link sidebar-menu" to="/makeAdmin">
                            <FontAwesomeIcon icon={faUserPlus} /> Make Admin
                        </Link>
                        <Link className="nav-link sidebar-menu" to="/manageService">
                            <FontAwesomeIcon icon={faThLarge} /> Manage Services
                        </Link>
                    </div>
                </div>
                <div className="right-panel col-md-9">
                    <h3>Order List</h3>
                    <div className="order-info">
                        <table class="table table-borderless">
                            <thead>
                                <tr className="text-center">
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Service</th>
                                    <th>Pay with</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderList;