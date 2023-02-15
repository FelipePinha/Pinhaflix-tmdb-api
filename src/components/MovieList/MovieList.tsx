import "./movieList.scss";
import "swiper/scss";
import "swiper/scss/navigation";

import useApi from "../../api/useApi";
import apiConfig from "../../api/apiConfig";
import { MovieCard } from "../MovieCard/MovieCard";
import { Swiper, SwiperSlide } from "swiper/react";

import { MovieListProps, apiResults } from "../../types/component_types";

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
                        840: {
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
                                    originalTitle={movie.title || movie.name}
                                    posterPath={apiConfig.image(
                                        movie.poster_path
                                    )}
                                    type={props.type}
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
