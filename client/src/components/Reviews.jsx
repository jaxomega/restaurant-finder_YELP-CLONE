import React from 'react'
import StarRating from './StarRating'

const Reviews = ({ reviews }) => {
  return (
    <div className="row-cols">
      {reviews.map((review) => {
        return (
          <div
            key={review.id}
            className="card-primary"
            style={{ maxWidth: "30%" }}
          >
              <div className="card-header">
                  <span>{review.name}</span>
                  <span>
                      <StarRating rating={review.rating} />
                  </span>
              </div>
              <div className="card-body">
                  <p className="card-text">{review.review}</p>
              </div>
          </div>
        );
      })}
      {/* <div
        className="card-text"
        style={{ maxWidth: "30%" }}
      >
        <div className="card-header">
          <span>Frank</span>
          <span>
            <StarRating rating={3} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">This restaurant was awesome</p>
        </div>
      </div>
      <div
        className="card-primary"
        style={{ maxWidth: "30%" }}
      >
        <div className="card-header">
          <span>Billy</span>
          <span>
            <StarRating rating={3} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">This restaurant was awesome</p>
        </div>
      </div>
      <div
        className="card-text"
        style={{ maxWidth: "30%" }}
      >
        <div className="card-header">
          <span>Joan</span>
          <span>
            <StarRating rating={3} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">This restaurant was awesome</p>
        </div>
      </div>
      <div
        className="card-primary"
        style={{ maxWidth: "30%" }}
      >
        <div className="card-header">
          <span>Sarah</span>
          <span>
            <StarRating rating={3} />
          </span>
        </div>
        <div className="card-body">
          <p className="card-text">This restaurant was awesome</p>
        </div>
      </div> */}
    </div>
  );
};

export default Reviews;