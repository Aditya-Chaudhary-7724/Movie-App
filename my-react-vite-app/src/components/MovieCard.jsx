import "../css/MovieCard.css";
import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({ movie }) {
    const { isFavorite, addToFavorites, removeFromFavorites } = useMovieContext();
    const favorite = isFavorite(movie.id);

    function onFavoriteClick(e) {
        e.preventDefault();
        if (favorite) removeFromFavorites(movie.id);
        else addToFavorites(movie);
    }

    // Generate a Filmlicious-like URL
    const formattedTitle = movie.title.toLowerCase().replace(/\s+/g, "-"); // Replace spaces with "-"
    const filmliciousURL = `https://filmlicious.click/film/${formattedTitle}/`;

    return (
        <a href={filmliciousURL} target="_blank" rel="noopener noreferrer" className="movie-card-link">
            <div className="movie-card">
                <div className="movie-poster">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    <div className="movie-overlay">
                        <button className={`favorite-btn ${favorite ? "active" : ""}`} onClick={onFavoriteClick}>
                            ♥
                        </button>
                    </div>
                </div>
                <div className="movie-info">
                    <h3>{movie.title}</h3>
                    <p>{movie.release_date?.split("-")[0]}</p>
                </div>
            </div>
        </a>
    );
}

export default MovieCard;
