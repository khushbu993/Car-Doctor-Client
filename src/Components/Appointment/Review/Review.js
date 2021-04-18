import React from 'react';
import './Review.css';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faCommentDots, faHome, faListAlt } from '@fortawesome/free-solid-svg-icons';
import { faCcPaypal, faCcStripe, faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Review = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="review-container container-fluid">
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
                    <h3>Review</h3>
                    <div className="form-container col-md-6">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="Your Name" className="form-control" />
                                {errors.name && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input type="text" {...register("email", { required: true })} name="email" placeholder="Your Email" className="form-control" />
                                {errors.email && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <textarea name="message" rows="10" cols="30" className="form-control" placeholder="Description"></textarea>
                            </div>
                            <div className="submit-btn">
                                <input type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;