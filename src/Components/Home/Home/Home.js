import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import BrandLogo from '../BrandLogo/BrandLogo';
import GetAppointment from '../GetAppointment/GetAppointment';
import Header from '../Header/Header';
import ServiceRepair from '../ServiceRepair/ServiceRepair';
import Teams from '../Teams/Teams';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div className="main-container">
            <Header></Header>
            <BrandLogo></BrandLogo>
            <ServiceRepair></ServiceRepair>
            <Teams></Teams>
            <Testimonials></Testimonials>
            <GetAppointment></GetAppointment>
            <Footer></Footer>
        </div>
    );
};

export default Home;