import React from 'react';
import { Badge } from 'react-bootstrap';
import './MovieCard.style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUsersRectangle } from '@fortawesome/free-solid-svg-icons';

const MovieCard = ({movie}) => {
  return (
    <div
    style={{
      backgroundImage:
      "url("+
      `https://media.themoviedb.org/t/p/w533_and_h300_bestv2${movie.poster_path}`+
      ")"
    }}
    className='movie-card'
    > 
      <div className='overlay'>
        <h2 className='movie-title'>{movie.title}</h2>
        <div className='movie-info'>
          <div>
            {movie.genre_ids.map((id, index) => 
              <Badge key={index} bg="danger">{id}</Badge>
            )}
          </div>
          <div><FontAwesomeIcon className="average" icon={faStar} />&nbsp;{movie.vote_average}</div>
          <div><FontAwesomeIcon className="popularity" icon={faUsersRectangle} />&nbsp;{movie.popularity}</div>
          <div>
            {movie.adult? 
              <h4 className='audult' style={{color: "red"}}>over 18</h4>
            : <h4 className='audult' style={{color: "green"}}>under 18</h4> 
            }
          </div>
        </div>
      </div>
    </div>

  )
}

export default MovieCard
