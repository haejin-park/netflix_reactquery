import React from 'react'
import { useSearchMovieQuery } from '../../hooks/useSearchMovie';
import { useSearchParams } from 'react-router-dom';
import { Alert, Col, Container, Row, Spinner } from 'react-bootstrap';
import MovieCard from '../../common/MovieCard/MovieCard';

/*
  경로 2가지
  navbar에서 클릭해서 온 경우 => popularMovie보여주기
  keyword를 입력해서 온 경우 => 키워드와 관련된 영화 보여주기
 (원래는 백엔드에서 해야할 작업들)

  페이지네이션 
  1 페이지네이션 설치
  2 page state만들기
  3 페이지네이션 클릭할 때 마다 page바꿔주기
  4 page값이 바뀔 때 마다 userSearchMovie에 page까지 넣어서 fetch
*/

const MoviePage = () => {
  const [query, setQuery] = useSearchParams();
  const keyword = query.get('q');
  const {data,isLoading, isError, error} = useSearchMovieQuery({keyword});
  console.log('data', data);

  if(isLoading) {
    return (
      <div className="loading-spinner">
        <Spinner className="home-loading-spinner" animation="border" variant="danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    )
  }

  if(isError) {
    return (
      <div className="error-alert">
        <Alert className="error-alert" variant="danger">
          {error.message}
        </Alert>
      </div>
    )
  }
  return (
    <Container>
      <Row>
        <Col lg={4} xs={12}>
          필터
        </Col>
        <Col lg={8} xs={12}>
          <Row>
            {data?.results.map((movie, index) => 
              <Col key={index} lg={4} xs={12}>
                <MovieCard movie={movie}/>
              </Col>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  )

};

export default MoviePage
