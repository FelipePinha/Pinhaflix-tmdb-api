import "./movieList.scss";
import useApi from "../../api/useApi";
import { Link } from "react-router-dom";
import apiConfig from "../../api/apiConfig";
import { MovieCard } from "../MovieCard/MovieCard";

interface MovieListProps {
    queryName: string;
    type: "movie/" | "tv/";
    param: string;
}

interface apiResults {
    poster_path: string;
    original_title: string;
    original_name: string;
    id: number;
}

export const MovieList = (props: MovieListProps) => {
    const { data, isLoading } = useApi({
        queryName: props.queryName,
        type: props.type,
        param: props.param,
    });
    if (isLoading) return <div>Carregando aqui meu</div>;

    const results = data.results;
    return (
        <div className="movie-list-container">
            <ul className="movie-list">
                {results.map((movie: apiResults) => {
                    return (
                        <MovieCard
                            id={movie.id}
                            originalTitle={
                                movie.original_title || movie.original_name
                            }
                            posterPath={apiConfig.image(movie.poster_path)}
                            key={movie.id}
                        />
                    );
                })}
            </ul>
        </div>
    );
};
