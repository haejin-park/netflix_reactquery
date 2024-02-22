import React from 'react'
import Banner from './components/Banner/Banner'
import PopularMovieSlider from './components/PopularMovieSlider/PopularMovieSlider'
import TopRatedMovieSlider from './components/TopRatedMovieSlider/TopRatedMovieSlider'
import UpcomingMovieSlider from './components/UpcomingMovieSlider/UpcomingMovieSlider'
import './HomePage.style.css';
/*
1. 배너 => popular영화 들고와서 첫번째 아이템 보여주기(api호출)
2. popular movie
3. top rated movie
4. upcoming movie
*/
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
