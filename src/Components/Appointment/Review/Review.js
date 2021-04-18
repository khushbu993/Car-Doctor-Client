import React from 'react';
import './Review.css';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faCommentDots, faHome, faListAlt } from '@fortawesome/free-solid-svg-icons';
import { faCcPaypal, faCcStripe, faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Review = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    
    //handle form submit
    const onSubmit = data => {
        const eventData = {
            name: data.name,
            designation: data.designation, 
            description: data.description,
        }
        console.log(eventData);
        const url = 'https://secure-cliffs-06319.herokuapp.com/addReview';
        console.log(data);
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => console.log('server side response'))
    };
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
                                <input type="text" {...register("designation", { required: true })} name="designation" placeholder="Your Designation" className="form-control" />
                                {errors.designation && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <textarea name="description" {...register("description", { required: true })} rows="10" cols="30" className="form-control" placeholder="Description"></textarea>
                                {errors.description && <span className="text-danger">This field is required</span>}
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