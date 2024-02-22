import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies';
import MovieCard from '../MovieCard/MovieCard';
import './PopularMovieSlide.style.css';
/*
영화 들고오기
캐루셀 적용하기
*/
const PopularMovieSlide = () => {
    const {data} = usePopularMoviesQuery();
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6,
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
      }
    };
  return (
    <div>
      <Carousel   
        infinite={true} 
        centerMode={true}
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        responsive={responsive} //기기별 몇개 보여줄건지
      >
        {data?.results.map((movie, index) => (
          <MovieCard movie={movie} key={index}></MovieCard>
        ))}
      </Carousel> 
    </div>
  )
}

export default PopularMovieSlide
