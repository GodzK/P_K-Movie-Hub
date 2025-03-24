import Navbar from "../components/Navbar";
import twinkling from "../images/twinkling-watermelon.png";
import "../styles/collection.css";
import Collections from "../../utils/movie.ts";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Loading from "./loading";
import Modal from "../components/Modal";
import { useEffect, useState } from "react";

function Collection() {
  const [loading, setLoading] = useState(true);
  const [selectImage, setSelectImage] = useState<string | null>(null);
  const [selectDesc, setSelectDesc] = useState<string | null>(null);
  const [filterType, setFilterType] = useState<
    "all" | "hot" | "Romance" | "Thriller" | "Comedy" | "Drama" | "Action"
  >("all");

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);

  const collection = Collections();
  const hottestMovie = collection.find((movie) => movie.hot === "true") || {
    title: "Not have a hot movie",
    description: "No hot movie available",
  };


  const filteredMovies =
    filterType === "all"
      ? collection
      : filterType === "hot"
      ? collection.filter((movie) => movie.hot === "true")
      : collection.filter((movie) => movie.category === filterType);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 4, slidesToScroll: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
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
          <div className="collection-hero-section">
            <img src={twinkling} alt="Twinkling Watermelon" />
            <div className="collection-hero-title">
              <div className="collection-hero-content">
                <h1 className="text-3xl font-bold">{hottestMovie.title}</h1>
                <p>{hottestMovie.description}</p>
                <div className="collection-btn">
                  <button className="button">
                    <h1>Let's Start</h1>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dropdown สำหรับกรอง */}
          <div className="filter-dropdown" style={{ margin: "20px 0", textAlign: "center" }}>
            <label htmlFor="movieFilter">Filter Movies: </label>
            <select
              id="movieFilter"
              value={filterType}
              onChange={(e) =>
                setFilterType(
                  e.target.value as "all" | "hot" | "Romance" | "Thriller" | "Comedy" | "Drama" | "Action"
                )
              }
              style={{ padding: "5px", fontSize: "16px", backgroundColor: "red" }}
            >
              <option value="all">All Movies</option>
              <option value="hot">Hot Movies</option>
              <option value="Romance">Romance</option>
              <option value="Thriller">Thriller</option>
              <option value="Comedy">Comedy</option>
              <option value="Drama">Drama</option>
              <option value="Action">Action</option>
            </select>
          </div>

          {/* Slider เดียว */}
          <div className="recommend-container">
            <h2>All Movies</h2>
            <Slider {...settings}>
              {filteredMovies.map((movie, index) => (
                <div key={index} className="movie-slide">
                  <img
                    src={movie.src}
                    alt={movie.title}
                    onClick={() => {
                      setSelectImage(movie.src);
                      setSelectDesc(movie.description);
                    }}
                  />
                  <p className="movie-title">{movie.title}</p>
                </div>
              ))}
            </Slider>
          </div>

          {selectImage && (
            <Modal image={selectImage} onClose={closeModal} desc={selectDesc} />
          )}
        </>
      )}
    </div>
  );
}

export default Collection;