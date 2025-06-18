import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import Collections from "../../utils/movie";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loading from "./loading";
import Modal from "../components/Modal";
import TopTier from "./toptier";
import "../styles/collection.css";

interface Ratings {
  excitement: number;
  romance: number;
  emotion: number;
  overall: number;
}

interface Movie {
  src: string;
  title: string;
  hot: string;
  description: string;
  category: "Series" | "Movies" | "Documentaries" | "Others";
  genre: string;
  rank: number;
  ratings: Ratings;
}

function Collection() {
  const [loading, setLoading] = useState(true);
  const [selectImage, setSelectImage] = useState<string | null>(null);
  const [selectDesc, setSelectDesc] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<"Series" | "Movies" | "Documentaries" | "Others" | "All">("Series");
  const [selectedGenre, setSelectedGenre] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => setLoading(false), 800);
  }, []);

  const collection = Collections();
  const featuredSeries = collection.find(movie => movie.category === "Series" && movie.hot === "true") || 
                        collection.find(movie => movie.category === "Series") || collection[0];

  const seriesGenres = Array.from(new Set(collection
    .filter(movie => movie.category === "Series")
    .map(movie => movie.genre)
  )).sort();

  const filteredMovies = selectedCategory === "All"
    ? collection
    : selectedCategory === "Series" && selectedGenre
    ? collection.filter(movie => movie.category === "Series" && movie.genre === selectedGenre)
    : collection.filter(movie => movie.category === selectedCategory);

  // Dynamic slider settings based on number of items
  const sliderSettings = {
    dots: filteredMovies.length > 1, // Show dots only if more than 1 item
    infinite: filteredMovies.length >= 5, // Disable infinite loop for < 5 items
    speed: 500,
    slidesToShow: Math.min(filteredMovies.length, 5), // Adjust slidesToShow
    slidesToScroll: Math.min(filteredMovies.length, 2), // Adjust slidesToScroll
    responsive: [
      { 
        breakpoint: 1024, 
        settings: { 
          slidesToShow: Math.min(filteredMovies.length, 4), 
          slidesToScroll: Math.min(filteredMovies.length, 2) 
        } 
      },
      { 
        breakpoint: 768, 
        settings: { 
          slidesToShow: Math.min(filteredMovies.length, 2), 
          slidesToScroll: 1 
        } 
      },
      { 
        breakpoint: 480, 
        settings: { 
          slidesToShow: 1, 
          slidesToScroll: 1 
        } 
      },
    ],
  };

  const closeModal = () => {
    setSelectImage(null);
    setSelectDesc(null);
  };

  return (
    <div className="collection-container">
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar />
          {/* Series Hero Section */}
          <div className="series-hero-section">
  <img 
    src={featuredSeries.src} 
    alt={featuredSeries.title} 
    onClick={() => {
      setSelectImage(featuredSeries.src);
      setSelectDesc(featuredSeries.description);
    }}
    style={{ cursor: 'pointer' }}
  />
  <div className="series-hero-overlay">
    <div className="series-hero-content">
      <span className="category-badge series">{featuredSeries.genre} Series</span>
      <h1 
        onClick={() => {
          setSelectImage(featuredSeries.src);
          setSelectDesc(featuredSeries.description);
        }}
        style={{ cursor: 'pointer' }}
      >
        {featuredSeries.title}
      </h1>
      <p className="review-text">{featuredSeries.description}</p>
      <div className="series-btn">
        <button className="play-btn" aria-label="Play trailer">
          <span className="play-icon">
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z" /></svg>
          </span>
          Watch Trailer
        </button>
        <button 
          className="info-btn" 
          aria-label="More info"
          onClick={() => {
            setSelectImage(featuredSeries.src);
            setSelectDesc(featuredSeries.description);
          }}
        >
          More Info
        </button>
      </div>
    </div>
  </div>
</div>

          {/* Category Navigation */}
          <nav className="category-nav">
            {["Series", "Movies", "Documentaries", "All"].map(category => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''} ${category.toLowerCase()}`}
                onClick={() => {
                  setSelectedCategory(category as "Series" | "Movies" | "Documentaries" | "Others" | "All");
                  if (category !== "Series") setSelectedGenre(null);
                }}
                aria-current={selectedCategory === category ? "true" : "false"}
              >
                {category}
              </button>
            ))}
          </nav>

          {/* Series Genre Filter */}
          {selectedCategory === "Series" && (
            <div className="genre-filter">
              <button
                className={`genre-btn ${!selectedGenre ? 'active' : ''}`}
                onClick={() => setSelectedGenre(null)}
                aria-current={!selectedGenre ? "true" : "false"}
              >
                All Series
              </button>
              {seriesGenres.map(genre => (
                <button
                  key={genre}
                  className={`genre-btn ${selectedGenre === genre ? 'active' : ''}`}
                  onClick={() => setSelectedGenre(genre)}
                  aria-current={selectedGenre === genre ? "true" : "false"}
                >
                  {genre}
                </button>
              ))}
            </div>
          )}

          {/* Recommended Section */}
          <section className="recommend-container">
            <h2>{selectedCategory === "All" ? "Recommended" : selectedCategory === "Series" && selectedGenre ? `${selectedGenre} Series` : selectedCategory}</h2>
            {filteredMovies.length <= 2 ? (
              <div className="movie-grid">
                {filteredMovies.map((movie, index) => (
                  <div key={index} className={`movie-slide ${movie.category.toLowerCase()}`}>
                    <img
                      src={movie.src}
                      alt={movie.title}
                      onClick={() => {
                        setSelectImage(movie.src);
                        setSelectDesc(movie.description);
                      }}
                    />
                    <div className="movie-info">
                      <span className={`category-badge ${movie.category.toLowerCase()}`}>{movie.genre}</span>
                      <p className="movie-title">{movie.title}</p>
                      <p className="movie-ratings">Overall: {movie.ratings.overall}/10</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <Slider {...sliderSettings}>
                {filteredMovies.map((movie, index) => (
                  <div key={index} className={`movie-slide ${movie.category.toLowerCase()}`}>
                    <img
                      src={movie.src}
                      alt={movie.title}
                      onClick={() => {
                        setSelectImage(movie.src);
                        setSelectDesc(movie.description);
                      }}
                    />
                    <div className="movie-info">
                      <span className={`category-badge ${movie.category.toLowerCase()}`}>{movie.genre}</span>
                      <p className="movie-title">{movie.title}</p>
                      <p className="movie-ratings">Overall: {movie.ratings.overall}/10</p>
                    </div>
                  </div>
                ))}
              </Slider>
            )}
          </section>

          {selectImage && (
            <Modal image={selectImage} onClose={closeModal} desc={selectDesc} />
          )}
          <TopTier />
        </>
      )}
    </div>
  );
}

export default Collection;