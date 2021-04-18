import React from 'react';
import './Footer.css';
import FooterCol from '../Footer/FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const noNamed = [
        { name: "ENGINE DIAGNOSTIC", link: "/engine" },
        { name: "ENGINE Check Up", link: "/engine-checkup" },
        { name: "MOTOR TUNE-UP", link: "/motor" },
        { name: "Sound System", link: "/sound-system" },
        { name: "ENGINE Check Up", link: "/engine-checkup" },
    ]
    const ourAddress = [
        { name: "Oslo - 0026 Sankt Hanshaugen", link: "//google.com/map" },
        { name: "Norway", link: "//google.com/map" },

    ]
    const features = [
        { name: "ENGINE DIAGNOSTIC", link: "/engine" },
        { name: "ENGINE Check Up", link: "/engine-checkup" },
        { name: "MOTOR TUNE-UP", link: "/motor" },
        { name: "Sound System", link: "/sound-system" },
        { name: "ENGINE Check Up", link: "/engine-checkup" },
        { name: "ENGINE Check Up", link: "/engine-checkup" },
        { name: "ENGINE Check Up", link: "/engine-checkup" }
    ]
    const services = [
        { name: "ENGINE DIAGNOSTIC", link: "/engine" },
        { name: "ENGINE Check Up", link: "/engine-checkup" },
        { name: "MOTOR TUNE-UP", link: "/motor" },
        { name: "Sound System", link: "/sound-system" },
        { name: "ENGINE Check Up", link: "/engine-checkup" },
        { name: "ENGINE Check Up", link: "/engine-checkup" },
        { name: "ENGINE Check Up", link: "/engine-checkup" }
    ]

    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed} />
                    <FooterCol key={2} menuTitle="Services" menuItems={services} />
                    <FooterCol key={3} menuTitle="Features" menuItems={features} />
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="www.facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="www.google.com"><FontAwesomeIcon className="icon" icon={faGoogle} /></a></li>
                            <li className="list-inline-item"><a href="www.instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6 className="text-success">Call now</h6>
                            <button className="btn btn-outline-danger">+880-1982-978-246</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;