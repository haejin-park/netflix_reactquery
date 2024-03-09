import React from 'react'
import Banner from './components/Banner/Banner'
import PopularMovieSlider from './components/PopularMovieSlider/PopularMovieSlider'
import TopRatedMovieSlider from './components/TopRatedMovieSlider/TopRatedMovieSlider'
import UpcomingMovieSlider from './components/UpcomingMovieSlider/UpcomingMovieSlider'
import './HomePage.style.css';

const HomePage = () => {

  return (
    <div>
      <Banner />
      <PopularMovieSlider />
      <TopRatedMovieSlider />
      <UpcomingMovieSlider />
    </div>
  )
}

export default HomePage
