import { Play } from "phosphor-react";
import { Link } from "react-router-dom";

import { MovieCardProps } from "../../types/component_types";
import "./movieCard.scss";

export const MovieCard = (props: MovieCardProps) => {
    return (
        <li>
            <Link to={`/${props.type}${props.id}`}>
                <div
                    className="movie-img"
                    style={{ backgroundImage: `url(${props.posterPath})` }}
                >
                    <button className="play">
                        <Play size={28} weight="fill" className="play-icon" />
                    </button>
                </div>
                <span className="movie-title">{props.originalTitle}</span>
            </Link>
        </li>
    );
};
