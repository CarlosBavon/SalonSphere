import React from "react";
import './Testimonials.css';

const testimonials = [
    {
        id: 1,
        name: "Amara Okonkwo",
        title: "Founder, Atelier Noir",
        rating: 5,
        quote:
            "SalonSphere replaced four separate tools. Our team went from chaos to clarity in a week.",
    },
    {
        id: 2,
        name: "Liam Whitaker",
        title: "Director, Fade & Co",
        rating: 5,
        quote:
            "The booking funnel alone added £18k in our first quarter. It just looks expensive — and it converts.",
    },
    {
        id: 3,
        name: "Priya Shah",
        title: "Owner, Lumen Studio",
        rating: 5,
        quote:
            "Finally a platform that doesn't make our brand look generic. Our clients notice the difference.",
    },
];

const StarRating = ({ rating }) => {
    return (
        <div className="stars">
            {[...Array(5)].map((_, i) => (
                <span key={i} className={i < rating ? "star filled" : "star"}>
                    ★
                </span>
            ))}
        </div>
    );
};

const TestimonialCard = ({ testimonial }) => {
    const { name, title, rating, quote } = testimonial;

    return (
        <div className="testimonial-card">
            <StarRating rating={rating} />
            <p className="quote">"{quote}"</p>
            <div className="author">
                <p className="name">{name}</p>
                <p className="title">{title}</p>
            </div>
        </div>
    );
};

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <div className="container">
                {testimonials.map((testimonial) => (
                    <TestimonialCard key={testimonial.id} testimonial={testimonial} />
                ))}
            </div>
        </section>
    );
};

export default Testimonials;