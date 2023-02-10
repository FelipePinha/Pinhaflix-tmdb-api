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
                <img src={props.posterPath} alt={props.originalTitle} />
                <span className="movie-title">{props.originalTitle}</span>
            </Link>
        </li>
    );
};
