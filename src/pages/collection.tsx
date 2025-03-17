import Navbar from "../components/Navbar";
import twinkling from "../images/twinkling-watermelon.png";
import "../styles/collection.css";
import Twinkling from "../../src/images/twinkling-watermelon.png";
import Undercover from "../../src/images/undercover.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Qot from "../../src/images/qot.jpg";
import lovelyrunner from "../../src/images/lovelyrunner.jpg";
import startup from "../../src/images/startup.jpg";
import tangurine from "../../src/images/tangurine.jpg";
import topgun from "../../src/images/topgun.jpg";
import vagabond from "../../src/images/vagabond.jpg";
import twenty from "../../src/images/20cen.jpg";
import nextdoor from "../../src/images/nextdoor.jpg";
import Loading from "./loading";
import Modal from "../components/Modal";
import { useEffect, useState } from "react";

const movie = [
  { src: Twinkling, title: "Twinkling Watermelon" },
  { src: Qot, title: "Queen of Tears" }, 
  { src: Undercover, title: "Undercover" },
  { src: lovelyrunner, title: "Lovely Runner" },
  { src: startup, title: "Start-Up" },
  { src: tangurine, title: "Tangurine" },
  { src: topgun, title: "Top Gun" },
  { src: vagabond, title: "Vagabond" },
  { src: twenty, title: "20th Century Girl" },
  { src: nextdoor, title: "Next Door" },
];
function Collection() {
  const [loading, setLoading] = useState(true);
  const [selectImage, setSelectImage] = useState<string | null>(null);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, []);
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
                <h1 className="text-3xl font-bold">Twinkling Watermelon</h1>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam
                  in corrupti eum minima, saepe magni dolorem possimus vitae rerum
                  quam reprehenderit facilis, dolorum neque ea dicta veritatis
                  mollitia recusandae consequuntur?
                </p>
                <div className="collection-btn">
                 
<button className="button">
    <h1>lets start</h1>
</button>
                </div>
              </div>
            </div>
          </div>

          <div className="recommend-container">
            <Slider {...settings}>
              {movie.map((movie, index) => (
                <div key={index} className="movie-slide">
                  <img
                    src={movie.src}
                    alt={movie.title}
                    onClick={() => setSelectImage(movie.src)} 
                  />
                  <p className="movie-title">{movie.title}</p>
                </div>
              ))}
            </Slider>
          </div>
          {selectImage ? (
            <Modal image={selectImage} onClose={closeModal} />
          ) : null}
        </>
      )}
    </div>
  );
}

export default Collection;