import { useEffect, useState, useRef } from "react";
import Loading from "./loading";
import Collections from "../../utils/movie";
import "../styles/toptier.css";

interface Movie {
  src: string;
  title: string;
  description: string;
  category: string;
  hot: string;
  rank?: number;
  ratings: {
    excitement: number;
    romance: number;
    emotion: number;
    overall: number;
  };
}

const TopTier: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [hoveredMovie, setHoveredMovie] = useState<Movie | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle click outside modal to close
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Prevent triggering during scroll or touchmove
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        event.type === "mousedown"
      ) {
        setHoveredMovie(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const collection: Movie[] = Collections();
  const rankedMovies = collection
    .filter((movie) => movie.rank && movie.rank <= 15)
    .sort((a, b) => (a.rank || 0) - (b.rank || 0));

  return (
    <div className="toptier-container">
      {loading ? (
        <Loading />
      ) : (
        <div className="tier-section">
          <h2 className="tier-title">PK Top 10 Ranking</h2>
          <div className="ranking-list">
            {rankedMovies.map((movie) => (
              <div
                key={movie.rank}
                className="ranking-card"
                onClick={() => setHoveredMovie(movie)}
              >
                <div className="ranking-content">
                  <div className="ranking-image-wrapper">
                    <img
                      src={movie.src || "/images/placeholder.png"}
                      alt={movie.title}
                      className="ranking-image"
                      loading="lazy"
                    />
                    <div className="image-overlay" />
                  </div>
                  <div className="ranking-info">
                    <span className="rank-number">#{movie.rank}</span>
                    <div className="movie-details">
                      <span className="movie-title">{movie.title}</span>
                      <span className="movie-category">{movie.category}</span>
                      <span className="movie-rating">
                        <span className="star">★</span> {movie.ratings.overall.toFixed(1)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {hoveredMovie && (
            <div className="movie-modal-backdrop" onClick={() => setHoveredMovie(null)}>
              <div className="movie-modal" ref={modalRef} onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={() => setHoveredMovie(null)}>
                  ×
                </button>
                <img
                  src={hoveredMovie.src || "/images/placeholder.png"}
                  alt={hoveredMovie.title}
                  className="modal-image"
                  loading="lazy"
                />
                <div className="modal-content">
                  <h3 className="modal-title">{hoveredMovie.title}</h3>
                  <p className="modal-category">{hoveredMovie.category}</p>
                  <p className="modal-description">{hoveredMovie.description}</p>
                  <div className="modal-ratings">
                    {[
                      { label: "ความมัน", value: hoveredMovie.ratings.excitement },
                      { label: "ความฟิน", value: hoveredMovie.ratings.romance },
                      { label: "ความซึ้ง", value: hoveredMovie.ratings.emotion },
                      { label: "Overall", value: hoveredMovie.ratings.overall },
                    ].map((rating) => (
                      <div key={rating.label} className="rating-item">
                        <span className="rating-label">{rating.label}</span>
                        <div className="rating-bar">
                          <div style={{ width: `${rating.value * 10}%` }} />
                        </div>
                        <span className="rating-value">{rating.value.toFixed(1)}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TopTier;