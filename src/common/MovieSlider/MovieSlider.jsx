import React from 'react'
import './MovieSlider.style.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';

const MovieSlider = ({title,movies,responsive}) => {
  return (
    <div className="slider">
      <div className="movie-slider">
        <h2 className="movies">{title}</h2>
        <Carousel   
          infinite={true} 
          centerMode={true}
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
          responsive={responsive} //기기별 몇개 보여줄건지
        >
          {movies?.results.map((movie, index) => (
            <MovieCard movie={movie} key={index}></MovieCard>
          ))}
        </Carousel> 
      </div>
    </div>
  )
}

export default MovieSlider
