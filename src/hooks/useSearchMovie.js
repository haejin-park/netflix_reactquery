import { useQuery } from "@tanstack/react-query"
import api from "../utils/api"

const fetchSearchMovie = ({keyword, page, sortOption}) => {
    if (sortOption !== '') {
        return api.get(`/discover/movie?include_adult=true&include_video=false&language=en-US&page=${page}&sort_by=${sortOption}`);
    }
    return keyword
        ? api.get(`/search/movie?query=${keyword}&page=${page}`)
        : api.get(`/movie/now_playing?page=${page}`);
}
export const useSearchMovieQuery = ({keyword, page, sortOption}) => {
    return useQuery({
        queryKey: ["movie-search", {keyword, page, sortOption}],
        queryFn:() => fetchSearchMovie({keyword, page, sortOption}),
        select: (data) => data.data,
    });
};