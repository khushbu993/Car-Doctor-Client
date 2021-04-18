import React from 'react';
import './Appointment.css';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faCommentDots, faHome, faListAlt } from '@fortawesome/free-solid-svg-icons';
import { faCcPaypal, faCcStripe, faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";



const Appointment = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="appointment-container container-fluid">
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
                    <h3>Appointment</h3>
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
                                <input type="text" {...register("service", { required: true })} name="service" placeholder="Your Service" className="form-control" />
                                {errors.service && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <p className="pay-text">PAY WITH</p>
                                <input className="payment-icon" type="radio" id="creditCard" name="gender" value="creditCard" />
                                <span className="payment-icon"><FontAwesomeIcon icon={faCcVisa} /> <label for="creditCard">Credit Card</label></span>
                                <input className="payment-icon" type="radio" id="Paypal" name="gender" value="Paypal" />
                                <span className="payment-icon"><FontAwesomeIcon icon={faCcPaypal} /> <label for="Paypal">Paypal</label></span>
                                <input className="payment-icon" type="radio" id="Stripe" name="gender" value="Stripe" />
                                <span className="payment-icon"><FontAwesomeIcon icon={faCcStripe} /> <label for="Paypal">Stripe</label></span>
                            </div>
                            <div className="form-group">
                                <input type="number" {...register("cardNumber", { required: true })} name="cardNumber" placeholder="Your Card Number" className="form-control" />
                                {errors.cardNumber && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input type="number" {...register("cardNumber", { required: true })} name="cardNumber" placeholder="MM/YY" className="form-control" />                                <input type="number" {...register("cardNumber", { required: true })} name="cardNumber" placeholder="CVC" className="form-control" />
                                {errors.cardNumber && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="submit-btn d-flex">
                                <p>Your Service Charged will be $1000</p>
                                <input type="submit" value="PAY" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;