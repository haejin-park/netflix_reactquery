import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUsersRectangle } from '@fortawesome/free-solid-svg-icons';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';
import { Link } from 'react-router-dom';
import './MoviePageCard.style.css';

const MoviePageCard = ({movie}) => {
  const {data:genresData} = useMovieGenreQuery();
  const showGenre = (genreIdList) => {
    if(!genreIdList) return [];
    const genreNameList = genreIdList.map((id) => {
      const genreObj = genresData?.find((genre) => genre.id === id)
      return genreObj?.name
    });
    return genreNameList;
  }
  return (
    <div>
      <Link className="movie-card-link" to={`/movies/:${movie.id}`}>
        <div className="info-section">
          <div className="movie-header">
            <div className="movie-header-box">
              {movie.poster_path? 
                <img className="movie-header-img" 
                  src={`https://media.themoviedb.org/t/p/w533_and_h300_bestv2${movie.poster_path}`} alt="">
                </img>
                : 
                <></>
              }
              <div className="movie-header-text-box">
                <h1 className='movie-header-title'>{movie.title}</h1>
                <h4 className="movie-header-release-year">{new Date(movie.release_date).getFullYear()}</h4>
              </div>
            </div>
            <ul className="movie-header-genres">
              {showGenre(movie.genre_ids).map((genreName, index) => 
                <li key={index}>{genreName}</li>
              )}
            </ul>
          </div>
          <div className="movie-desc">
            <p className="movie-desc-overview">{movie.overview}</p>
          </div>
          <div className="movie-social">
            <ul>
              <li><FontAwesomeIcon className="average" icon={faStar} />&nbsp;{movie.vote_average}</li>
              <li><FontAwesomeIcon className="popularity" icon={faUsersRectangle} />&nbsp;{movie.popularity}</li>
              <li>
                {movie.adult? 
                  <h4 className='audult' style={{color: "red"}}>over 18</h4>
                : <h4 className='audult' style={{color: "green"}}>under 18</h4> 
                }
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            backgroundImage:
            movie.backdrop_path && 
            "url("+
            `https://media.themoviedb.org/t/p/w533_and_h300_bestv2${movie.backdrop_path}`+
            ")"
          }}
          className='movie-page-card-image'
        >
        </div>
      </Link>
    </div>
  )
}

export default MoviePageCard
