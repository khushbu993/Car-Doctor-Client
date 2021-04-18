import React from 'react';
import './ServiceRepair.css';
import service1 from '../../images/service-1.png';
import service2 from '../../images/service-2.png';
import service3 from '../../images/service-3.png';
import service4 from '../../images/service-4.png';

const ServiceRepair = () => {
    return (
        <div className="service-repair-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2><span style={{color: '#1fcbff'}}>SERVICE</span> & <span style={{color: '#02ee8c'}}>REPAIR</span></h2>
                    </div>
                    <div className="col-md-3">
                        <div className="service-card-info">
                            <div className="service-card-image">
                                <img className="image" src={service1} alt="" />
                            </div>
                            <div className="service-card-text">
                                <h4>ENGINE DIAGNOSTIC</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div className="middle-content">
                                <button class="button">
                                    See More
	                                <div class="button__horizontal"></div>
                                    <div class="button__vertical"></div>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="service-card-info">
                            <div className="service-card-image">
                                <img className="image" src={service2} alt="" />
                            </div>
                            <div className="service-card-text">
                                <h4>MOTOR TUNE-UP</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div className="middle-content">
                                <button class="button">
                                    See More
	                                <div class="button__horizontal"></div>
                                    <div class="button__vertical"></div>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="service-card-info">
                            <div className="service-card-image">
                                <img className="image" src={service3} alt="" />
                            </div>
                            <div className="service-card-text">
                                <h4>Sound System</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div className="middle-content">
                                <button class="button">
                                    See More
	                                <div class="button__horizontal"></div>
                                    <div class="button__vertical"></div>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="service-card-info">
                            <div className="service-card-image">
                                <img className="image" src={service4} alt="" />
                            </div>
                            <div className="service-card-text">
                                <h4>ENGINE BENEFITS</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div className="middle-content">
                                <button class="button">
                                    See More
	                                <div class="button__horizontal"></div>
                                    <div class="button__vertical"></div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceRepair;