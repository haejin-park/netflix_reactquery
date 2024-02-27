
import React, { useState } from 'react'
import useMovieReviews from '../../../../hooks/useMovieReviews';
import Review from '../../../../common/Review/Review';
import './MovieReviews.style.css';
import Pagination from '../../../../common/Pagination/Pagination';


const MovieReviews = ({movieId}) => {
  const {data} = useMovieReviews({movieId});
  const [page, setPage] = useState(1);
  const handlePageClick = ({selected}) => {
    setPage(selected+1);
  };
  
  return (
    <div className="review-container">
        <h2>Reviews</h2>
        {data?.results?.map((review, index) => (
            <Review key={review.id} review={review}/>
        ))}
        <Pagination data={data} handlePageClick={handlePageClick} page={page}/>

    </div>
  )
}

export default MovieReviews
