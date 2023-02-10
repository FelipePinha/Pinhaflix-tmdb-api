import { MovieList } from "../MovieList/MovieList";
import { TopicButton } from "../TopicButton/TopicButton";
import "./topics.scss";

export const Topics = () => {
    return (
        <div>
            <section className="topic-section">
                <div className="topic-header">
                    <h2 className="topic-title">Filmes em alta</h2>
                    <TopicButton />
                </div>
                <MovieList
                    queryName="now_playing"
                    type="movie/"
                    param="now_playing"
                />
            </section>
            <section className="topic-section">
                <div className="topic-header">
                    <h2 className="topic-title">Filmes de sucesso</h2>
                    <TopicButton />
                </div>
                <MovieList
                    queryName="top_rated_movies"
                    type="movie/"
                    param="top_rated"
                />
            </section>
            <section className="topic-section">
                <div className="topic-header">
                    <h2 className="topic-title">Séries populares</h2>
                    <TopicButton />
                </div>
                <MovieList
                    queryName="popular_shows"
                    type="tv/"
                    param="popular"
                />
            </section>
            <section className="topic-section">
                <div className="topic-header">
                    <h2 className="topic-title">Séries de sucesso</h2>
                    <TopicButton />
                </div>
                <MovieList
                    queryName="top_rated_shows"
                    type="tv/"
                    param="top_rated"
                />
            </section>
        </div>
    );
};
