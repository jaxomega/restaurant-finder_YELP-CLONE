import React from 'react'

const StarRating = ({ rating }) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating ) {
            stars.push(<i key={i} className="text-warning"></i>);
        } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
            stars.push(<i key={i} className="half-alt text-warning"></i>);
        } else {
            stars.push(<i key={i} className="text-warning"></i>);
        }
    }
    return <>{stars}</>
};

export default StarRating;