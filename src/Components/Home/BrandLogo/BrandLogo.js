import React from 'react';
import './BrandLogo.css';
import brand1 from '../../images/brand-1.png';
import brand2 from '../../images/brand-2.png';
import brand3 from '../../images/brand-3.png';
import brand4 from '../../images/brand-4.png';
import brand5 from '../../images/brand-5.png';
import brand6 from '../../images/brand-6.png';

const BrandLogo = () => {
    return (
        <div className="brand-logo">
            <div className="container">
                <div className="row">
                    <div className="brand-img d-flex">
                        <div className="brand1 col-md-2">
                            <img src={brand1} alt="" />
                        </div>

                        <div className="brand2 col-md-2">
                            <img src={brand2} alt="" />
                        </div>

                        <div className="brand3 col-md-2">
                            <img src={brand3} alt="" />
                        </div>

                        <div className="brand4 col-md-2">
                            <img src={brand4} alt="" />
                        </div>

                        <div className="brand5 col-md-2">
                            <img src={brand5} alt="" />
                        </div>

                        <div className="brand6 col-md-2">
                            <img src={brand6} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BrandLogo;