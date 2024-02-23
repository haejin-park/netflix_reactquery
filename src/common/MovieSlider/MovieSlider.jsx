import React, { useEffect, useState } from 'react'
import './MovieSlider.style.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';

const MovieSlider = ({movieListTitle, movies, responsive}) => {

  let [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 767);
    };
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener("resize", checkMobile);

  }, []);
  return (
    <div className="slider">
      <div className="movie-slider">
        <h2 className="movie-list-title">{movieListTitle}</h2>
        <Carousel   
          showDots={isMobile}
          infinite={true} 
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
