import React, { useEffect, useState } from 'react'
import './MovieSlider.style.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import MovieCard from '../MovieCard/MovieCard';

const MovieSlider = ({movieListTitle, movies, responsive}) => {

  let [deviceType, setDeviceType] = useState("");

  useEffect(() => {
    const checkDeviceType = () => {
      if(window.innerWidth >=992) {
        setDeviceType("desktop");
      } else if(window.innerWidth >=768 && window.innerWidth <=991) {
        setDeviceType("tablet");
      } else {
        setDeviceType("mobile");
      }
    };
    window.addEventListener('resize', checkDeviceType);

    return () => window.removeEventListener("resize", checkDeviceType);
  }, []);

  return (
    <div className="slider">
      <div className="movie-slider">
        <h2 className="movie-list-title">{movieListTitle}</h2>
        <Carousel   
          showDots={deviceType === 'mobile'? true : false}
          infinite={true} 
          itemClass="carousel-item-padding-40-px"
          containerClass="carousel-container"
          responsive={responsive} //기기별 몇개 보여줄건지
          removeArrowOnDeviceType={"mobile"}
          autoPlay={deviceType !== "mobile" ? true : false}
          transitionDuration={500}
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
