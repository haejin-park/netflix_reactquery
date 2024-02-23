import React from 'react'
import { usePopularMoviesQuery } from '../../../../hooks/usePopularMovies'
import "./Banner.style.css";
const Banner = () => {
  const {data} = usePopularMoviesQuery();
  return (
    <div style={{
      backgroundImage:
        "url(" +
        `https://media.themoviedb.org/t/p/w533_and_h300_bestv2${data?.results[2].poster_path}` +
        ")",
      }}
      className="banner" 
    >
      <div className="text-white banner-text-area">
        <h1>{data?.results[2].title}</h1>
        <p>{data?.results[2].overview}</p>
      </div>
    </div>
  )
}

export default Banner
