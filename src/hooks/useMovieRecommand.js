import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';

const fetchMovieRecommend = ({movieId}) => {
    return api.get(`/movie/${movieId}/recommendations`);
}
const useMovieRecommendQuery = ({movieId}) => {
    return useQuery({
        queryKey:['movie-recommend', movieId],
        queryFn: () => fetchMovieRecommend({movieId}),
        select:(data) => data.data,
    })
}

export default useMovieRecommendQuery;
