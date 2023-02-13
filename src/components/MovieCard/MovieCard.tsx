import { Play } from "phosphor-react";
import { Link } from "react-router-dom";
import "./movieCard.scss";

interface MovieCardProps {
    id: number;
    posterPath: string;
    originalTitle: string;
}

export const MovieCard = (props: MovieCardProps) => {
    return (
        <li>
            <Link to="">
                <div
                    className="movie-img"
                    style={{ backgroundImage: `url(${props.posterPath})` }}
                >
                    <button className="play">
                        <Play size={28} weight="fill" />
                    </button>
                </div>
                <span className="movie-title">{props.originalTitle}</span>
            </Link>
        </li>
    );
};
