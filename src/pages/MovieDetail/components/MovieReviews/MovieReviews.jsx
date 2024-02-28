
import React, { useState } from 'react'
import Review from '../../../../common/Review/Review';
import './MovieReviews.style.css';
import Pagination from '../../../../common/Pagination/Pagination';
import { useMovieReviewsQuery } from '../../../../hooks/useMovieReviews';
import { Alert, Spinner } from 'react-bootstrap';


const MovieReviews = ({movieId}) => {
  const {data, isLoading, isError, error} = useMovieReviewsQuery({movieId});
  const [page, setPage] = useState(1);
  const handlePageClick = ({selected}) => {
    setPage(selected+1);
  };
  if(isLoading) {
    return (
      <div className="loading-spinner">
        <Spinner className="home-loading-spinner" animation="border" variant="danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    )
  }

  if(isError) {
    return (
      <div className="error-alert">
        <Alert className="error-alert" variant="danger">
          {error.message}
        </Alert>
      </div>
    )
  }
  return (
    <div className="review-container">
        <h2>Reviews</h2>
        {data?.results?.map((review, index) => (
            <Review key={review.id} review={review} index={index}/>
        ))}
        <Pagination data={data} handlePageClick={handlePageClick} page={page}/>

    </div>
  )
}

export default MovieReviews
