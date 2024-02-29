import React from 'react'
import { useParams } from 'react-router-dom';
import { useMovieDetailQuery } from '../../hooks/useMovieDetail';
import { Alert, Col, Container, Row, Spinner } from 'react-bootstrap';
import Banner from '../Home/components/Banner/Banner';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faUsersRectangle } from '@fortawesome/free-solid-svg-icons';
import RecommendMovieSlider from './components/RecommendMovieSlider/RecommendMovieSlider';
import './MovieDetailPage.style.css';
import MovieReviews from './components/MovieReviews/MovieReviews';

const MovieDetailPage = () => {

  const params = useParams();
  const movieId = params.id;
  const {data, isLoading, isError, error} =  useMovieDetailQuery({movieId});
  if(isLoading) {
    return (
      <div className="loading-spinner">
        <Spinner className="home-loading-spinner" animation="border" variant="danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    )
  };

  if(isError) {
    return (
      <div className="error-alert">
        <Alert className="error-alert" variant="danger">
          {error.message}
        </Alert>
      </div>
    )
  };
  return (
    <div>
      <Banner movieDetailData={data}/>
      <Container className="movie-detail-container">
        <Row className="movie-detail-info">
          <Col lg={6} xs={12}  className="movie-detail-poster-col">
            <div className="movie-detail-poster-box">
              {data?.poster_path? 
                <img 
                  src={`https://media.themoviedb.org/t/p/w300_and_h450_bestv2${data.poster_path}`} alt="">
                </img>
                : 
                <></>
              }
            </div>
          </Col>
          <Col lg={6} xs={12}>
            <div className="movie-detail-badge-box">
              {data?.genres.map((genre, index) => 
                <div key={index} bg="danger" className="movie-detail-badge">
                  {genre.name}
                </div>
              )}
            </div>
            <h1 className='movie-detail-title'>{data?.title}</h1>
            <h4 className='movie-detail-tagline'>{data?.tagline}</h4>
            <div className="movie-detail-info-icon-box">
              <div><FontAwesomeIcon className="average" icon={faStar} />&nbsp;{data?.vote_average}</div>
              <div><FontAwesomeIcon className="popularity" icon={faUsersRectangle} />&nbsp;{data?.popularity}</div>
              <div>
                {data?.adult? 
                  <h4 className='audult' style={{color: "red"}}>over 18</h4>
                : <h4 className='audult' style={{color: "green"}}>under 18</h4> 
                }
              </div>
            </div>
            <div className="movie-detail-overview">{data?.overview}</div>
            <div className="movie-detail-etc-info">
              <div className="movie-detail-badge-box">
                <div className='movie-detail-badge'>Budget</div>
                <div className="movie-detail-badge-box-text">${data?.budget.toLocaleString()}</div>
              </div>
              <div className="movie-detail-badge-box">
                <div className='movie-detail-badge'>Revenue</div>
                <div className="movie-detail-badge-box-text">${data?.revenue.toLocaleString()}</div>
              </div>
              <div className="movie-detail-badge-box">
                <div className='movie-detail-badge'>Release Date</div>
                <div className="movie-detail-badge-box-text">{data?.release_date}</div>
              </div>
              <div className="movie-detail-badge-box">
                <div className='movie-detail-badge'>Runtime</div>
                <div className="movie-detail-badge-box-text">{data?.runtime}분</div>
              </div>
            </div>
          </Col>
        </Row>
        <Row className="movie-detail-recommend">
          <Col>
            <div>
              <RecommendMovieSlider movieId={movieId}/>
            </div>
          </Col>
        </Row>
        <Row className="movie-detail-reviews">
          <Col>
            <MovieReviews movieId={movieId}/>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default MovieDetailPage
