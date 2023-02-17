import "./movieInfo.scss";
import { Star } from "phosphor-react";
import { MovieInfoProps } from "../../types/component_types";

export const MovieInfo = (props: MovieInfoProps) => {
    const [year] = props.year.split("-");
    const genres = props.genres;

    return (
        <section className="movie-info-container">
            <div className="movie-title">
                <span>{year}</span>
                <h2 className="title">{props.title}</h2>
            </div>

            <div className="infos">
                <div className="info">
                    <p className="sinopse">{props.sinopse}</p>
                </div>
                <div className="underline"></div>

                <div className="genres">
                    {genres.map((item, index) => (
                        <div className="genre" key={index}>
                            <span>{item.name}</span>
                        </div>
                    ))}
                </div>
                <div className="underline"></div>

                <div className="info">
                    <h3>
                        <span>Avaliações</span>
                    </h3>
                    <span className="rating">
                        <Star weight="fill" size={20} className="star" />
                        {props.rating.toFixed(1)} / 10
                    </span>
                </div>
                <div className="underline"></div>

                <div className="info">
                    <h3>Votos</h3>
                    <span>{props.vote_count}</span>
                </div>
                <div className="underline"></div>

                <div className="info">
                    <h3>Status</h3>
                    <span>{props.status}</span>
                </div>
                <div className="underline"></div>
            </div>
        </section>
    );
};
