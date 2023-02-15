import { useParams } from "react-router-dom";
import useApi from "../api/useApi";

import { Banner } from "../components/Banner/Banner";
import { MovieInfo } from "../components/MovieInfo/MovieInfo";

export const Details = () => {
    const { type, id } = useParams();
    const { data, isLoading } = useApi({
        queryName: `details-${id}`,
        type: `${type}/`,
        param: `${id}`,
    });

    if (isLoading) return <h1>espera!!</h1>;

    // console.log(data.first_air_date);
    // console.log(data.release_date);
    return (
        <>
            <Banner poster={data.backdrop_path} genres={data.genres} />
            <MovieInfo
                sinopse={data.overview}
                rating={data.vote_average}
                vote_count={data.vote_count}
                status={data.status}
                year={data.release_date || data.first_air_date}
                title={data.title || data.name}
            />
        </>
    );
};
