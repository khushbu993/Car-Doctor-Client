import React, { useEffect, useState } from 'react';
import './ServiceRepair.css';
import SingleServiceRepair from '../SingleServiceRepair/SingleServiceRepair';

const ServiceRepair = () => {
    const [service, setService] = useState([]);

    useEffect(() => {
        const url = `https://secure-cliffs-06319.herokuapp.com/services`;
        fetch(url)
        .then(res => res.json())
        .then(data => setService(data))
    }, [])
    console.log(service);
    return (
        <div className="service-repair-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2><span style={{color: '#1fcbff'}}>SERVICE</span> & <span style={{color: '#02ee8c'}}>REPAIR</span></h2>
                    </div>
                    {
                        service.map(service => <SingleServiceRepair service={service}></SingleServiceRepair>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ServiceRepair;