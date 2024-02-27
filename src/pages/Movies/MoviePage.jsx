import React, { useEffect, useState } from 'react'
import { useSearchMoviesQuery } from '../../hooks/useSearchMovies';
import { useSearchParams } from 'react-router-dom';
import { Alert, Spinner, Container, Col, Row } from 'react-bootstrap';
import MoviePageCard from '../../common/MoviePageCard/MoviePageCard';
import {FormControl, InputLabel, NativeSelect, Box,  Collapse, Slider} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { useMovieGenreQuery } from '../../hooks/useMovieGenre';
import Pagination from '../../common/Pagination/Pagination';
import './MoviePage.style.css';

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
  const [page, setPage] = useState(1);
  const [openSort, setOpenSort] = useState(true);
  const [openFilter, setOpenFilter] = useState(true);
  const optionList = ['None', 'Popularity(Desc)', 'Popularity(Asc)', 'Release Day(Desc)', 
  'Release Day(Asc)', 'Vote(Desc)', 'Vote(Asc)', 'Revenue(Desc)', 'Revenue(Asc)'];
  const [selectedOption, setSelectedOption] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [year, setYear] = useState([1800, 2200]);
  const [score, setScore] = useState([0, 10]);
  const [genreId, setGenreId] = useState();
  const minDistance = 1;
  const keyword = query.get('q');
  const {data, isLoading, isError, error} = useSearchMoviesQuery({keyword, page, sortOption});
  let results = data?.results;
  const [movies, setMovies] = useState([]);
  const {data:genresData} = useMovieGenreQuery();

  useEffect(() => {

    if(selectedOption){
      switch(selectedOption) {
        case 'None': 
          setSortOption('');
          break;
        case 'Popularity(Desc)': 
          setSortOption('popularity.desc');
          break;
        case 'Popularity(Asc)': 
          setSortOption('popularity.asc');
          break;
        case 'Release Day(Desc)': 
          setSortOption('primary_release_date.desc');
          break;
        case 'Release Day(Asc)': 
          setSortOption('primary_release_date.asc');
          break;
        case 'Vote(Desc)': 
          setSortOption('vote_average.desc');
          break;
        case 'Vote(Asc)': 
          setSortOption('vote_average.asc');
          break;
        case 'Revenue(Desc)': 
          setSortOption('revenue.desc');
          break;
        case 'Revenue(Asc)': 
          setSortOption('revenue.asc');
          break;
        default: 
          return;
      }
    }
  

    if(year && results) {
      results = results.filter((result) => {
        let releaseYear = parseInt(result.release_date?.split('-')[0]);
        return releaseYear >= year[0] && releaseYear <=  year[1];
      });
    }

    if(score && results) {
      results = results.filter((result) => {
        return result.vote_average >= score[0] && result.vote_average <= score[1];
      });
    }

    if(genreId && results) {
      results = results.filter((result) => {
        return result.genre_ids.includes(genreId);
      });
    }

  /* 상태가 비동기적으로 업데이트 되므로 movies가 업데이트 되는 시점은 useEffect이후이기 때문에 모든 필터링 결과를 반영할 수 있도록 상태를 한번에 업데이트  */
    setMovies(results)

  }, [selectedOption, score, year, genreId, data?.results]);

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

const handlePageClick = ({selected}) => {
    setPage(selected+1);
  };

  const handleSortClick = () => {
    setOpenSort(!openSort);
  };

  const handleFilterClick = () => {
    setOpenFilter(!openFilter);
  };

  const valuetext = (value) => {
    return `${value}`;
  };

const handleYearChange = (event, newValue, activeThumb) => {
  if (!Array.isArray(newValue)) {
    return;
  }
  if (activeThumb === 0) {
    setYear([Math.min(newValue[0], year[1] - minDistance), year[1]]);
  } else {
    setYear([year[0], Math.max(newValue[1], year[0] + minDistance)]);
  }

};

const handleScoreChange = (event, newValue, activeThumb) => {
  if (!Array.isArray(newValue)) {
    return;
  }

  if (activeThumb === 0) {
    setScore([Math.min(newValue[0], score[1] - minDistance), score[1]]);
  } else {
    setScore([score[0], Math.max(newValue[1], score[0] + minDistance)]);
  }
};
  
  return (
    <Container className="movie-page-container">
      <Row>
        <Col lg={4} xs={12}> 
        <div className="sort-and-filter-section">
          {/* Sort */}
          <div
            className='dropdown-section'
          >
            <div className="dropdown-name-section" onClick={handleSortClick}>
              <div className="dropdown-name">
                <h4>Sort</h4>
                <span>{openSort ? <ExpandMore /> : <ExpandLess />}</span>
              </div>
            </div>
            <Collapse className="dropdown-collapse-section" in={openSort} timeout="auto" unmountOnExit>
              <div className="dropdown-div">
                <h4>Sort Results By</h4>
                <Box className="dropdown-sort">
                  <FormControl>
                    <InputLabel className="sort-label" variant="standard" htmlFor="uncontrolled-native">Sort By</InputLabel>
                    <NativeSelect
                      defaultValue={selectedOption}
                      inputProps={{
                        name: '',
                        id: 'uncontrolled-native',
                      }}
                      onChange={(event) => setSelectedOption(event.target.value)}
                    >
                      {optionList.map((item, index) => (
                        <option key={index} value={item}>{item}</option>
                      ))}
                    </NativeSelect>
                  </FormControl>
                </Box>
              </div>
            </Collapse>          
          </div>
          {/* Filter */}
          <div
            className='dropdown-section'
          >
            <div className="dropdown-name-section" onClick={handleFilterClick}>
              <div className="dropdown-name">
                <h4>Filter</h4>
                <span>{openFilter ? <ExpandMore /> : <ExpandLess />}</span>
              </div>
            </div>
            <Collapse className="dropdown-collapse-section" in={openFilter} timeout="auto" unmountOnExit>
              {/* Year */}
              <div className="year-filter">
                <div className="dropdown-div">
                  <h4>Year Filter</h4>
                  <Box className="dropdown-slider-filter">
                    <p>
                      From: 
                      <span className="from-to-text"> {year[0]}</span> 
                      &nbsp; - &nbsp;
                      To: 
                      <span className="from-to-text"> {year[1]}</span>
                    </p>
                    <div>
                      <Slider
                          className="filter-slider"
                          getAriaLabel={() => 'Minimum distance'}
                          value={year}
                          onChange={handleYearChange}
                          valueLabelDisplay="auto"
                          getAriaValueText={valuetext}
                          disableSwap
                          min={1800}
                          max={2200}
                      />
                    </div>
                  </Box>
                </div>
              </div>
              {/* IBM */}
              <div className="ibm-score-filter">
                <div className="dropdown-div">
                  <h4>IBM Score Filter</h4>
                  <Box className="dropdown-slider-filter">
                    <p>
                      From: 
                      <span className="from-to-text"> {score[0]}</span> 
                      &nbsp; - &nbsp;
                      To: 
                      <span className="from-to-text"> {score[1]}</span>
                    </p>
                    <div>
                      <Slider
                          className="filter-slider"
                          getAriaLabel={() => 'Minimum distance'}
                          value={score}
                          onChange={handleScoreChange}
                          valueLabelDisplay="auto"
                          getAriaValueText={valuetext}
                          disableSwap
                          min={0}
                          max={10}
                      />
                    </div>
                  </Box>
                </div>
              </div>
              {/* Genres */}
              <div className="genres-filter">
                <div className="dropdown-div">
                  <h4>Genres Filter</h4>
                  <ul className="dropdown-genres-filter">
                    {genresData?.map((genre,index) => (
                      <li className="genres-btn" key={index} onClick={() => setGenreId(genre.id)}>{genre.name}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Collapse>          
          </div>
        </div>
        </Col>
        <Col lg={8} xs={12}>
          <Row>
            {movies?.map((movie, index) => 
              <Col key={index} lg={6} xs={12}>
                <MoviePageCard movie={movie}/>
              </Col>
            )}
          </Row>

        </Col>
      </Row>
      <Pagination data={data} handlePageClick={handlePageClick} page={page}/>
    </Container>
  )

};

export default MoviePage
