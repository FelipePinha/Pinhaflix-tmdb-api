import "./movieList.scss";
import "swiper/scss";
import "swiper/scss/navigation";

import useApi from "../../api/useApi";
import apiConfig from "../../api/apiConfig";
import { MovieCard } from "../MovieCard/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";

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
                <Swiper
                    spaceBetween={20}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        300: {
                            slidesPerView: 2,
                        },
                        600: {
                            slidesPerView: 3,
                        },
                        1000: {
                            slidesPerView: 4,
                        },
                        1200: {
                            slidesPerView: 5,
                        },
                    }}
                >
                    {results.map((movie: apiResults) => {
                        return (
                            <SwiperSlide key={movie.id}>
                                <MovieCard
                                    id={movie.id}
                                    originalTitle={
                                        movie.original_title ||
                                        movie.original_name
                                    }
                                    posterPath={apiConfig.image(
                                        movie.poster_path
                                    )}
                                    key={movie.id}
                                />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </ul>
        </div>
    );
};
