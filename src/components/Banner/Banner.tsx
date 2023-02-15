import apiConfig from "../../api/apiConfig";

import { Star } from "phosphor-react";
import "./banner.scss";

interface BannerProps {
    poster: string;
    genres: string[];
}

export const Banner = (props: BannerProps) => {
    const poster = props.poster;
    const genres = props.genres;

    return (
        <div
            className="banner"
            style={{ backgroundImage: `url(${apiConfig.banner(poster)})` }}
        >
            <div className="genres">
                {genres.map((item, index) => (
                    <div className="genre" key={index}>
                        <span>{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
