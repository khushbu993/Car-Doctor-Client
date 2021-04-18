import React from 'react';
import './AddService.css';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlusSquare, faShoppingBag, faThLarge, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const AddService = () => {
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
                    <h3>Add Service</h3>
                    <div className="add-service-info">
                        <div className="form-container col-md-6">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="form-group">
                                    <label htmlFor="serviceTitle">Service Title</label>
                                    <input type="text" {...register("serviceTitle", { required: true })} name="serviceTitle" placeholder="Enter Title" className="form-control" id="serviceTitle" />
                                    {errors.serviceTitle && <span className="text-danger">This field is required</span>}
                                </div>
                                <div className="form-group">
                                    <label htmlFor="service-description">Description</label>
                                    <textarea name="service-description" rows="5" cols="30" className="form-control" placeholder="Enter Description" id="service-description"></textarea>
                                </div>
                                <div class="mb-3">
                                    <label for="formFile" class="form-label">Upload Image</label>
                                    <input name="imageURL" class="form-control" type="file" id="formFile" onChange={''} />
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

export default AddService;