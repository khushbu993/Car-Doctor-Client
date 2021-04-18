import React from 'react';
import './Testimonials.css';
import customer1 from '../../images/customer-1.jpg';
import customer2 from '../../images/customer-2.jpg';
import customer3 from '../../images/customer-3.jpg';
import customer4 from '../../images/customer-4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-regular-svg-icons';

const Testimonials = () => {
    return (
        <div className="testimonials-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>TESTIMONIALS</h2>
                    </div>
                    <div className="col-md-3">
                        <div className="testimonial-card">
                            <div className="info d-flex">
                                <div className="logo">
                                    <img src={customer1} alt="" />
                                </div>
                                <div className="logo-info">
                                    <h6 style={{ color: '#00ac09' }}>SIMON DOE</h6>
                                    <p>Customer, NY</p>
                                </div>
                            </div>
                            <div className="info-detail">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi itaque tenetur libero ipsa molestiae dolorem quia laborum omnis nemo iure.</p>
                            </div>
                            <div className="info-rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="testimonial-card">
                            <div className="info d-flex">
                                <div className="logo">
                                    <img src={customer2} alt="" />
                                </div>
                                <div className="logo-info">
                                    <h6 style={{ color: '#00ac09' }}>ANGELA DOE</h6>
                                    <p>Customer, NY</p>
                                </div>
                            </div>
                            <div className="info-detail">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi itaque tenetur libero ipsa molestiae dolorem quia laborum omnis nemo iure.</p>
                            </div>
                            <div className="info-rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="testimonial-card">
                            <div className="info d-flex">
                                <div className="logo">
                                    <img src={customer3} alt="" />
                                </div>
                                <div className="logo-info">
                                    <h6 style={{ color: '#00ac09' }}>JHON DOE</h6>
                                    <p>Customer, NY</p>
                                </div>
                            </div>
                            <div className="info-detail">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi itaque tenetur libero ipsa molestiae dolorem quia laborum omnis nemo iure.</p>
                            </div>
                            <div className="info-rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="testimonial-card">
                            <div className="info d-flex">
                                <div className="logo">
                                    <img src={customer4} alt="" />
                                </div>
                                <div className="logo-info">
                                    <h6 style={{ color: '#00ac09' }}>RIANA DOE</h6>
                                    <p>Customer, NY</p>
                                </div>
                            </div>
                            <div className="info-detail">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi itaque tenetur libero ipsa molestiae dolorem quia laborum omnis nemo iure.</p>
                            </div>
                            <div className="info-rating">
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;