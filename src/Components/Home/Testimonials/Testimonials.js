import React, { useEffect, useState } from 'react';
import './Testimonials.css';
import SingleTestimonial from '../SingleTestimonial/SingleTestimonial';

const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        const url = `https://secure-cliffs-06319.herokuapp.com/reviews`;
        fetch(url)
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    console.log(reviews);
    return (
        <div className="testimonials-container">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2>TESTIMONIALS</h2>
                    </div>
                    {
                        reviews.map(review => <SingleTestimonial review={review}></SingleTestimonial>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Testimonials;