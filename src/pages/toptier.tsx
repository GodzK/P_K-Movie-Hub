import { useEffect, useState, useRef } from "react";
import Loading from "./loading";
import Collections from "../../utils/movie.ts";
import "../styles/toptier.css";

interface Movie {
  src: string;
  title: string;
  description: string;
  category: string;
  hot: string;
  rank?: number;
  ratings: { excitement: number; romance: number; emotion: number; overall: number };
}

function TopTier() {
  const [loading, setLoading] = useState(true);
  const [hoveredMovie, setHoveredMovie] = useState<Movie | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle click outside modal to close it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setHoveredMovie(null);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  const collection: Movie[] = Collections();
  const rankedMovies = collection
    .filter((movie) => movie.rank && movie.rank <= 10)
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
                onMouseEnter={() => setHoveredMovie(movie)}
                onMouseLeave={() => setHoveredMovie(null)}
              >
                <div className="ranking-content" onClick={() => setHoveredMovie(movie)}>
                  <div className="ranking-image-wrapper">
                    <img
                      src={movie.src || "/images/placeholder.png"}
                      alt={movie.title}
                      className="ranking-image"
                    />
                    <div className="image-overlay"></div>
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
            <div className="movie-modal" ref={modalRef}>
              <div className="modal-close" onClick={() => setHoveredMovie(null)}>×</div>
              <img
                src={hoveredMovie.src || "/images/placeholder.png"}
                alt={hoveredMovie.title}
                className="modal-image"
              />
              <div className="modal-content">
                <h3>{hoveredMovie.title}</h3>
                <p className="modal-category">{hoveredMovie.category}</p>
                <p className="modal-description">{hoveredMovie.description}</p>
                <div className="modal-ratings">
                  <div className="rating-item">
                    <span>ความมัน</span>
                    <div className="rating-bar">
                      <div style={{ width: `${hoveredMovie.ratings.excitement * 10}%` }}></div>
                    </div>
                    <span>{hoveredMovie.ratings.excitement.toFixed(1)}</span>
                  </div>
                  <div className="rating-item">
                    <span>ความฟิน</span>
                    <div className="rating-bar">
                      <div style={{ width: `${hoveredMovie.ratings.romance * 10}%` }}></div>
                    </div>
                    <span>{hoveredMovie.ratings.romance.toFixed(1)}</span>
                  </div>
                  <div className="rating-item">
                    <span>ความซึ้ง</span>
                    <div className="rating-bar">
                      <div style={{ width: `${hoveredMovie.ratings.emotion * 10}%` }}></div>
                    </div>
                    <span>{hoveredMovie.ratings.emotion.toFixed(1)}</span>
                  </div>
                  <div className="rating-item">
                    <span>Overall</span>
                    <div className="rating-bar">
                      <div style={{ width: `${hoveredMovie.ratings.overall * 10}%` }}></div>
                    </div>
                    <span>{hoveredMovie.ratings.overall.toFixed(1)}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default TopTier;