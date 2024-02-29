import { Route, Routes } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import HomePage from './pages/Home/HomePage';
import MoviePage from './pages/Movies/MoviePage';
import MovieDetailPage from './pages/MovieDetail/MovieDetailPage';
import NotFoundPage from './pages/NotFound/NotFoundPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fontsource/roboto/400.css';
import { ThemeProvider, createTheme } from '@mui/material';
import './App.css';
import './layout/AppLayout.style.css';
import ScrollToTop from './common/ScrollToTop/ScrollToTop';


//홈페이지 /
//영화 전체 보여주는 페이지(서치) /movie 검색조건이 추가되면 /movie?q=asdfadsf 이런식으로
//영화 디테일 페이지 /movies/:id
//추천 영화 /movies/:id/recommandation
//리뷰 /movies/:id/reviews
function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: 'rgb(255, 0, 0)', // Material-UI main색상을 red로 변경
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<AppLayout/>}>
          <Route index element={<HomePage/>}/>
          <Route path="movies">
            <Route index element={<MoviePage/>}/>
            <Route path=":id" element={<MovieDetailPage/>}/>
          </Route>
        </Route>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>
    </ThemeProvider>
    
  );
}


export default App;
