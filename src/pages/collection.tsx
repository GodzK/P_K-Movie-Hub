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

const movie = [
    { src: Twinkling, title: "Twinkling Watermelon" },
    { src: Undercover, title: "Undercover" },
    { src: Qot, title: "Queen of Tears" },
    { src: lovelyrunner, title: "Lovely Runner" },
    { src: startup, title: "Start-Up" },
    { src: tangurine, title: "Tangurine" },
    { src: topgun, title: "Top Gun" },
    { src: vagabond, title: "Vagabond" },
    { src: twenty, title: "20th Century Girl" },
    { src: nextdoor, title: "Next Door" }
]
function Collection() {
    const settings = {
        dots: false,         
        infinite: true,       
        speed: 500,          
        slidesToShow: 5,     
        slidesToScroll: 2,   
        responsive: [        
          {
            breakpoint: 1024,
            settings: { slidesToShow: 4, slidesToScroll: 2 }
          },
          {
            breakpoint: 768,
            settings: { slidesToShow: 2, slidesToScroll: 1 }
          },
          {
            breakpoint: 480,
            settings: { slidesToShow: 1, slidesToScroll: 1 }
          }
        ]
      };
  return (
    <div className="collection-container">
      <Navbar />
      <div className="collection-hero-section">
        <img src={twinkling} alt="" />
        <div className="collection-hero-title">
          <div className="collection-hero-content">
            <h1 className="text-3xl font-bold">twinkling water melon</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam in
              corrupti eum minima, saepe magni dolorem possimus vitae rerum quam
              reprehenderit facilis, dolorum neque ea dicta veritatis mollitia
              recusandae consequuntur?
            </p>
            <div className="collection-btn">
              <button className="Btn-Container">
                <span>&nbsp;&nbsp;&nbsp;&nbsp;Watch The review!</span>
                <span className="icon-Container">
                  <svg
                    width="16"
                    height="19"
                    viewBox="0 0 16 19"
                    fill="nones"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="1.61321"
                      cy="1.61321"
                      r="1.5"
                      fill="black"
                    ></circle>
                    <circle
                      cx="5.73583"
                      cy="1.61321"
                      r="1.5"
                      fill="black"
                    ></circle>
                    <circle
                      cx="5.73583"
                      cy="5.5566"
                      r="1.5"
                      fill="black"
                    ></circle>
                    <circle
                      cx="9.85851"
                      cy="5.5566"
                      r="1.5"
                      fill="black"
                    ></circle>
                    <circle cx="9.85851" cy="9.5" r="1.5" fill="black"></circle>
                    <circle cx="13.9811" cy="9.5" r="1.5" fill="black"></circle>
                    <circle
                      cx="5.73583"
                      cy="13.4434"
                      r="1.5"
                      fill="black"
                    ></circle>
                    <circle
                      cx="9.85851"
                      cy="13.4434"
                      r="1.5"
                      fill="black"
                    ></circle>
                    <circle
                      cx="1.61321"
                      cy="17.3868"
                      r="1.5"
                      fill="black"
                    ></circle>
                    <circle
                      cx="5.73583"
                      cy="17.3868"
                      r="1.5"
                      fill="black"
                    ></circle>
                  </svg>
                </span>
              </button>
              <div className="relative inline-block group">
                <button className="relative ml-6 mt-2 px-6 py-3 text-sm font-semibold text-white bg-indigo-600/90 rounded-xl hover:bg-indigo-700/90 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all duration-300 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl group-hover:opacity-75 transition-opacity"></div>

                  <span className="relative flex items-center gap-2">
                    <svg
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      className="w-4 h-4"
                    >
                      <path
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        stroke-width="2"
                        stroke-linejoin="round"
                        stroke-linecap="round"
                      ></path>
                    </svg>
                    Hover for Info
                  </span>
                </button>
                <div className="absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 mb-3 w-72 transition-all duration-300 ease-out transform group-hover:translate-y-0 translate-y-2">
                  <div className="relative p-4 bg-gradient-to-br from-gray-900/95 to-gray-800/95 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(79,70,229,0.15)]">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-500/20">
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-4 h-4 text-indigo-400"
                        >
                          <path
                            clip-rule="evenodd"
                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      <h3 className="text-sm font-semibold text-white">
                        Important Information
                      </h3>
                    </div>

                    <div className="space-y-2">
                      <p className="text-sm text-gray-300">
                        This is a Best Movies or Series in my life in here
                      </p>
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="w-4 h-4"
                        >
                          <path
                            clip-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            fill-rule="evenodd"
                          ></path>
                        </svg>
                        <span>Premium Feature</span>
                      </div>
                    </div>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500/10 to-purple-500/10 blur-xl opacity-50"></div>
                    <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gradient-to-br from-gray-900/95 to-gray-800/95 rotate-45 border-r border-b border-white/10"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div>
      </div>
      <div className="recommend-container">
      <Slider {...settings}>
        {movie.map((movie, index) => (
          <div key={index} className="movie-slide">
            <img src={movie.src} alt={movie.title} />
            <p className="movie-title">{movie.title}</p>
          </div>
        ))}
      </Slider>
      </div>
    </div>
  );
}

export default Collection;
