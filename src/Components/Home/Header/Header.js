import React from 'react';
import './Header.css'
import Slider from '../Slider/Slider';
import TopNav from '../../Shared/TopNav/TopNav';
import HeadInfo from '../HeadInfo/HeadInfo';
import Features from '../Features/Features';


const Header = () => {
    return (
        <div className="header-container">
            <TopNav></TopNav>
            <Slider></Slider>
            <HeadInfo></HeadInfo>
            <Features></Features>
        </div>
    );
};

export default Header;