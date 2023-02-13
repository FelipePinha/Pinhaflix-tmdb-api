export interface MovieListProps {
    queryName: string;
    type: "movie/" | "tv/";
    param: string;
}

export interface apiResults {
    poster_path: string;
    original_title: string;
    original_name: string;
    id: number;
}
