import React from 'react';
import customer1 from '../../images/customer-1.jpg';
import './SingleTestimonial.css'

const SingleTestimonial = (props) => {
    const {name, designation, description} = props.review;
    return (
        <div className="col-md-3">
            <div className="testimonial-card">
                <div className="info d-flex">
                    <div className="logo">
                        <img src={customer1} alt="" />
                    </div>
                    <div className="logo-info">
                        <h6 style={{ color: '#00ac09' }}>{name}</h6>
                        <p>{designation}</p>
                    </div>
                </div>
                <div className="info-detail">
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleTestimonial;