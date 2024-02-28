import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchMovieVideo = ({movieId}) => {
   return api.get(`/movie/${movieId}/videos`);
}
export const useMovieVideoQuery = ({movieId}) => {
    return useQuery({
        queryKey: ['movie-reviews', movieId],
        queryFn: () => fetchMovieVideo({movieId}),
        select: (data) => data.data,
    });
}


