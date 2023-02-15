import { useParams } from "react-router-dom";
import useApi from "../api/useApi";

import { Banner } from "../components/Banner/Banner";

export const Details = () => {
    const { type, id } = useParams();
    const { data, isLoading } = useApi({
        queryName: `details-${id}`,
        type: `${type}/`,
        param: `${id}`,
    });

    if (isLoading) return <h1>espera!!</h1>;

    // console.log(data.revenue);
    // console.log(data.release_date);
    return (
        <>
            <Banner
                poster={data.backdrop_path}
                title={data.title ? data.title : data.name}
                date={
                    data.release_date ? data.release_date : data.first_air_date
                }
                rating={data.vote_average}
                synopsis={data.overview}
            />
        </>
    );
};
