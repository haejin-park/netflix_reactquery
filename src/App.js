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

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: 'rgb(255, 0, 0)', 
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
