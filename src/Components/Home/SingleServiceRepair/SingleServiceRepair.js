import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import './SingleServiceRepair.css';

const SingleServiceRepair = (props) => {
    const { imageURL, serviceTitle, serviceDescription } = props.service;
    const { value1, value2 } = useContext(UserContext);
    const [singleService, setSingleService] = value2;

    const handleDelete = (data) => {
        setSingleService(data);
    }
    return (
        <div className="col-md-3">
            <div className="service-card-info">
                <div className="service-card-image">
                    <img className="service-card-image" src={imageURL} alt="" />
                </div>
                <div className="service-card-text">
                    <h4>{serviceTitle}</h4>
                    <p>{serviceDescription}</p>
                </div>
                <div className="middle-content">
                    <Link to="/appointment">
                        <button onClick={() => { handleDelete(props.service) }} class="button">
                            See More
                        <div class="button__horizontal"></div>
                            <div class="button__vertical"></div>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SingleServiceRepair;