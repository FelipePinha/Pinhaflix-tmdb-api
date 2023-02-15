import apiConfig from "../../api/apiConfig";

import { Star } from "phosphor-react";
import "./banner.scss";

interface BannerProps {
    poster: string;
    title: string;
    date: string;
    rating: number;
    synopsis: string;
}

export const Banner = (props: BannerProps) => {
    const poster = props.poster;
    const [year] = props.date.split("-");

    return (
        <div
            className="banner"
            style={{ backgroundImage: `url(${apiConfig.banner(poster)})` }}
        >
            <div className="movie-info">
                <div className="title-box">
                    <span className="release">{year}</span>
                    <h2>{props.title}</h2>
                    <div className="rating-box">
                        <Star className="star" weight="fill" />
                        <span className="rating">
                            {props.rating.toFixed(1)} / 10
                        </span>
                    </div>
                </div>
                <div className="banner-buttons">
                    <button className="watch-trailer-button">
                        Assistir trailer
                    </button>
                    <button className="read-more-button">Ler mais...</button>
                </div>
            </div>
        </div>
    );
};
