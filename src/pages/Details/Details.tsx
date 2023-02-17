import { useState } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../api/useApi";

import { Banner } from "../../components/Banner/Banner";
import { MovieInfo } from "../../components/MovieInfo/MovieInfo";
import { Trailer } from "../../components/Trailer/Trailer";
import { MovieList } from "../../components/MovieList/MovieList";

import "./details.scss";

export const Details = () => {
    const [modalIsActive, setModalIsActive] = useState(false);
    const { type, id } = useParams();

    const { data, isLoading } = useApi({
        queryName: `details-${id}`,
        type: `${type}/`,
        param: `${id}`,
    });

    const handleToggleModal = () => {
        setModalIsActive(!modalIsActive);
    };

    if (isLoading) return <h1>espera!!</h1>;

    return (
        <>
            <Banner
                poster={data.backdrop_path}
                handleToggleModal={handleToggleModal}
            />
            <MovieInfo
                sinopse={data.overview}
                rating={data.vote_average}
                vote_count={data.vote_count}
                status={data.status}
                year={data.release_date || data.first_air_date}
                title={data.title || data.name}
                genres={data.genres}
            />

            <Trailer
                modal={modalIsActive}
                handleToggleModal={handleToggleModal}
                id={data.id}
                type={type}
            />
            <section className="similar-movies-container">
                <div className="topic-title-box">
                    <h2>Filmes similares</h2>
                </div>
                <MovieList
                    queryName={`similar-${data.id}`}
                    param={`${data.id}/similar`}
                    type={`${type}/`}
                />
            </section>
        </>
    );
};
