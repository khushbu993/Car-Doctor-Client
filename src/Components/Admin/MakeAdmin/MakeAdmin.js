import React from 'react';
import './MakeAdmin.css';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlusSquare, faShoppingBag, faThLarge, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="add-service-container container-fluid">
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
                    <h3>Make Admin</h3>
                    <div className="make-admin-info">
                        <div className="form-container col-md-6">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" {...register("email", { required: true })} name="email" placeholder="khushbu@gmail.com" className="form-control" id="email" />
                                    {errors.email && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="submit-btn">
                                    <input type="submit" value="Submit" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;