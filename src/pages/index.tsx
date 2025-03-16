import "../styles/Home.css";
import Background from "../components/Background";
import Twinkling from "../../src/images/twinkling-watermelon.png";
import Undercover from "../../src/images/undercover.jpg";
import qot from "../../src/images/qot.jpg";
import lovelyrunner from "../../src/images/lovelyrunner.jpg";
import startup from "../../src/images/startup.jpg";
import tangurine from "../../src/images/tangurine.jpg";
import topgun from "../../src/images/topgun.jpg";
import vagabond from "../../src/images/vagabond.jpg";
import twenty from "../../src/images/20cen.jpg";
import { JSX } from "react";
import nextdoor from "../../src/images/nextdoor.jpg";
import { Link } from "react-router-dom";

const items: JSX.Element[] = [
  <img key="lovelyrunner-1" src={lovelyrunner} alt="Lovely Runner Image" />,
  <img key="undercover-1" src={Undercover} alt="Undercover Image" />,
  <img key="nextdoor-1" src={nextdoor} alt="Next Door Image" />,
  <img key="topgun-1" src={topgun} alt="Top Gun Image" />,
  <img key="undercover-2" src={Undercover} alt="Undercover Image" />,
  <img key="undercover-3" src={Undercover} alt="Undercover Image" />,
  <img key="nextdoor-2" src={nextdoor} alt="Next Door Image" />,
  <img key="undercover-4" src={Undercover} alt="Undercover Image" />,
  <img key="undercover-5" src={Undercover} alt="Undercover Image" />,
  <img key="lovelyrunner-2" src={lovelyrunner} alt="Lovely Runner Image" />,
  <img key="tangurine-1" src={tangurine} alt="Tangurine Image" />,
  <img key="startup-1" src={startup} alt="Startup Image" />,
  <img key="topgun-2" src={topgun} alt="Top Gun Image" />,
  <img key="vagabond-1" src={vagabond} alt="Vagabond Image" />,
  <img key="lovelyrunner-3" src={lovelyrunner} alt="Lovely Runner Image" />,
  <img key="undercover-6" src={Undercover} alt="Undercover Image" />,
  <img key="twinkling-1" src={Twinkling} alt="Twinkling Watermelon" />,
  <img key="qot-1" src={qot} alt="Quote Image" />,
  <img key="twenty-1" src={twenty} alt="20th Century Image" />,
  <img key="nextdoor-3" src={nextdoor} alt="Next Door Image" />,
  <img key="nextdoor-4" src={nextdoor} alt="Next Door Image" />,
  <img key="undercover-7" src={Undercover} alt="Undercover Image" />,
  <img key="qot-2" src={qot} alt="Quote Image" />,
  <img key="undercover-8" src={Undercover} alt="Undercover Image" />,
  <img key="qot-3" src={qot} alt="Quote Image" />,
  <img key="undercover-9" src={Undercover} alt="Undercover Image" />,
  <img key="nextdoor-5" src={nextdoor} alt="Next Door Image" />,
  <img key="undercover-10" src={Undercover} alt="Undercover Image" />,
];

function Index() {
  return (
    <div className="container">
      <div>
        <Background items={items} />
      </div>
      <div className="card">
        <h1 className="text-3xl font-bold">My Personal Series Collection</h1>
        <br />
        <h2>Phakaphol Dherachaisuphakij</h2>
        <Link to="/collection">
          <button className="bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
            <span className="bg-red-500 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
            LETS STARTED
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Index;