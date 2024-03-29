import React from 'react'
import MovieSlider from '../../../../common/MovieSlider/MovieSlider'

import { Alert, Spinner } from 'react-bootstrap';
import { responsive } from '../../../../constants/responsive';
import { useMovieRecommendQuery } from '../../../../hooks/useMovieRecommend';

const RecommendMovieSlider = ({movieId}) => {
    const {data, isLoading, isError, error} = useMovieRecommendQuery({movieId});

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
    <div>
        <MovieSlider movieListTitle="Recommend Movies" movies={data} responsive={responsive}/>
    </div>
  )
}

export default RecommendMovieSlider
