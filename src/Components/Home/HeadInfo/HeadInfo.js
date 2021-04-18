import React from 'react';
import './HeadInfo.css';
import headInfo01 from '../../images/info-1.jpg';
import headInfo02 from '../../images/info-2.jpg';
import headInfo03 from '../../images/info-3.jpg';

const HeadInfo = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-4">
                    <div className="card-info">
                        <div className="card-img">
                            <img src={headInfo01} alt="" />
                        </div>
                        <div className="card-text">
                            <h5>24 HOUR AUTO ROAD RECOVERY</h5>
                            <p><small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, maxime!</small></p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card-info">
                        <div className="card-img">
                            <img src={headInfo02} alt="" />
                        </div>
                        <div className="card-text">
                            <h5>TOTAL AUTO TUNE UPS</h5>
                            <p><small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, maxime!</small></p>
                        </div>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card-info">
                        <div className="card-img">
                            <img src={headInfo03} alt="" />
                        </div>
                        <div className="card-text">
                            <h5>24/7 ACTIVE SERVICES</h5>
                            <p><small>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque, maxime!</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeadInfo;