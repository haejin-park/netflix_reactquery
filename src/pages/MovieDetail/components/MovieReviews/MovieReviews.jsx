
import React from 'react'
import useMovieReviews from '../../../../hooks/useMovieReviews';
import Review from '../../../../common/Review/Review';
import './MovieReviews.style.css';

const MovieReviews = ({movieId}) => {
    const {data} = useMovieReviews({movieId});
  return (
    <div className="review-container">
        <h2>Reviews</h2>
        {data?.results?.map((review, index) => (
            <Review key={review.id} review={review}/>
        ))}
    </div>
  )
}

export default MovieReviews
