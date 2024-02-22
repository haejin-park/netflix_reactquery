import React from 'react'
import Banner from './components/Banner/Banner'
import PopularMovieSlide from './components/PopularMovieSlide/PopularMovieSlide'
import { Alert, Spinner } from 'react-bootstrap';
import { usePopularMoviesQuery } from '../../hooks/usePopularMovies';
import './HomePage.style.css';
/*
1. 배너 => popular영화 들고와서 첫번째 아이템 보여주기(api호출)
2. popular movie
3. top rated movie
4. upcoming movie
*/
const HomePage = () => {
  const {isLoading, isError, error} = usePopularMoviesQuery();
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
      <Banner />
      <PopularMovieSlide />
    </div>
  )
}

export default HomePage
