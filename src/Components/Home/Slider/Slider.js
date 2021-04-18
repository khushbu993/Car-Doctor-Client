import React from 'react';
import { Link } from 'react-router-dom';
import Slider01 from '../../images/slider-01.png';



const Slider = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <img src={Slider01} height="500px" width="350px" alt="..." />
                </div>
                <div className="col-md-7 ">
                    <h1 style={{ fontSize: '100px' }}>Auto Repairing Services</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia provident rerum fugiat nemo vitae reprehenderit nostrum iusto quaerat veritatis exercitationem laboriosam, soluta est quasi, ad eum commodi facere, sequi neque?</p>
                    <Link to="/" className="btn btn-brand"><span style={{color: 'whitesmoke', fontWeight: '600', border: 'none'}}>MAKE APPOINTMENT</span></Link>
                </div>
            </div>
        </div>
    );
};

export default Slider;