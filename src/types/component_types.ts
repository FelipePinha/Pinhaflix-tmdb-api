export interface MovieListProps {
    queryName: string;
    type: "movie/" | "tv/" | string;
    param: string;
}

export interface apiResults {
    poster_path: string;
    title: string;
    name: string;
    id: number;
}

export interface MovieCardProps {
    id: number;
    posterPath: string;
    originalTitle: string;
    type: string;
}

export interface MovieInfoProps {
    sinopse: string;
    status: string;
    title: string;
    year: string;
    rating: number;
    vote_count: number;
    genres: string[];
}

export interface TrailerProps {
    modal: boolean;
    handleToggleModal: () => void;
    id: number;
    type: string | undefined;
}
