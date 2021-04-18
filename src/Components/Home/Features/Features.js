import React from 'react';
import './Features.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGasPump, faShieldAlt, faTachometerAlt, faTrophy, faWrench } from '@fortawesome/free-solid-svg-icons'
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';

const Features = () => {
    return (
        <div className="features-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="feature-info d-flex">
                            <div>
                                <FontAwesomeIcon icon={faTachometerAlt} className="feature-icon" />
                            </div>
                            <div className="feature-text ml-3">
                                <h4>DIAGNOSTIC SERVICE</h4>
                                <p>Lorem ipsum dolor sit amet, eum ad maiorum scribentur intellegebat, nec debet iriure propriae no ei qui prima.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="feature-info d-flex">
                            <div>
                                <FontAwesomeIcon className="feature-icon" icon={faTrophy} />
                            </div>
                            <div className="feature-text ml-3">
                                <h4>PERFORMANCE UPGRADES</h4>
                                <p>Lorem ipsum dolor sit amet, eum ad maiorum scribentur intellegebat, nec debet iriure propriae no ei qui prima.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="feature-info d-flex">
                            <div>
                                <FontAwesomeIcon className="feature-icon" icon={faShieldAlt} />
                            </div>
                            <div className="feature-text ml-3">
                                <h4>PERFECT DESIGN</h4>
                                <p>Lorem ipsum dolor sit amet, eum ad maiorum scribentur intellegebat, nec debet iriure propriae no ei qui prima.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="feature-info d-flex">
                            <div>
                                <FontAwesomeIcon className="feature-icon" icon={faWrench} />
                            </div>
                            <div className="feature-text ml-3">
                                <h4>VEHICLE INSPECTION</h4>
                                <p>Lorem ipsum dolor sit amet, eum ad maiorum scribentur intellegebat, nec debet iriure propriae no ei qui prima.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="feature-info d-flex">
                            <div>
                                <FontAwesomeIcon className="feature-icon" icon={faGasPump} />
                            </div>
                            <div className="feature-text ml-3">
                                <h4>ECONOMIC FUEL</h4>
                                <p>Lorem ipsum dolor sit amet, eum ad maiorum scribentur intellegebat, nec debet iriure propriae no ei qui prima.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="feature-info d-flex">
                            <div>
                                <FontAwesomeIcon className="feature-icon" icon={faCalendarAlt} />
                            </div>
                            <div className="feature-text ml-3">
                                <h4>FRESH DESIGN</h4>
                                <p>Lorem ipsum dolor sit amet, eum ad maiorum scribentur intellegebat, nec debet iriure propriae no ei qui prima.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;