import React, { useContext, useState } from 'react';
import './Appointment.css';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck, faCommentDots, faHome, faListAlt } from '@fortawesome/free-solid-svg-icons';
import { faCcPaypal, faCcStripe, faCcVisa } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../App';
import ProcessPayment from './ProcessPayment/ProcessPayment';



const Appointment = () => {
    const { value1, value2 } = useContext(UserContext);
    const [loggedInUser, setLoggedInUser] = value1;
    const [singleService, setSingleService] = value2;
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [appointmentData, setAppointmentData] = useState(null);

    const onSubmit = data => {
        setAppointmentData(data);
    };

    const handlePaymentSuccess = paymentId => {
        const appointmentDetails = {
            ...loggedInUser,
            appointment: appointmentData,
            paymentId,
            orderTime: new Date()
        };

        const url = 'https://secure-cliffs-06319.herokuapp.com/addAppointment';
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(appointmentDetails)
        })
            .then(res => console.log('server side response'))
    }
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
                    <div style={{ display: appointmentData ? 'none' : 'block' }} className="form-container col-md-6">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <input type="text" {...register("name", { required: true })} name="name" placeholder="Your Name" className="form-control" defaultValue={loggedInUser.name} />
                                {errors.name && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input type="text" {...register("email", { required: true })} name="email" placeholder="Your Email" className="form-control" defaultValue={loggedInUser.email} />
                                {errors.email && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <input type="text" {...register("service", { required: true })} name="service" placeholder="Your Service" className="form-control" defaultValue={singleService.serviceTitle} />
                                {errors.service && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="submit-btn"><input type="submit" value="SUBMIT" />
                            </div>
                        </form>
                    </div>
                    <div style={{ display: appointmentData ? 'block' : 'none' }} className="col-md-6">
                        <h2>Pay with this Payment Method</h2>
                        <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;