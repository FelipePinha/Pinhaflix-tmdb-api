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
