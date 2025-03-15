import React from "react";
import "../styles/Home.css";
import Background from "../components/Background";
import Twinkling from "../../public/images/twinkling-watermelon.png"; // Correct image import
import Undercover from "../../public/images/undercover.jpg";
import qot from "../../public/images/qot.jpg";
import lovelyrunner from "../../public/images/lovelyrunner.jpg";
import startup from "../../public/images/startup.jpg";
import tangurine from "../../public/images/tangurine.jpg";
import topgun from "../../public/images/topgun.jpg";
import vagabond from "../../public/images/vagabond.jpg";
import twenty from "../../public/images/20cen.jpg";
import nextdoor from "../../public/images/nextdoor.jpg";
const items = [
    <img key="jsx-item" src={lovelyrunner} alt="Undercover Image" />,
  <img key="jsx-item" src={Undercover} alt="Undercover Image" />,
  <img key="jsx-item" src={nextdoor} alt="Undercover Image" />,
  <img key="jsx-item" src={topgun} alt="Undercover Image" />,
  <img key="jsx-item" src={Undercover} alt="Undercover Image" />,
  <img key="jsx-item" src={Undercover} alt="Undercover Image" />,
  <img key="jsx-item" src={nextdoor} alt="Undercover Image" />,
  <img key="jsx-item" src={Undercover} alt="Undercover Image" />,
  <img key="jsx-item" src={Undercover} alt="Undercover Image" />,
  <img key="jsx-item" src={lovelyrunner} alt="Undercover Image" />,
  <img key="jsx-item" src={tangurine} alt="Undercover Image" />,
  <img key="jsx-item" src={startup} alt="Undercover Image" />,
  <img key="jsx-item" src={topgun} alt="Undercover Image" />,
  <img key="jsx-item" src={vagabond} alt="Undercover Image" />,
  <img key="jsx-item" src={lovelyrunner} alt="Undercover Image" />,
  <img key="jsx-item" src={Undercover} alt="Undercover Image" />,
  <img key="jsx-item" src={Twinkling} alt="Twinkling Watermelon" />,
  <img key="jsx-item" src={vagabond} alt="Quote Image" />,
  <img key="jsx-item" src={twenty} alt="20th Century Image" />,
  <img key="jsx-item" src={nextdoor} alt="Quote Image" />,
  <img key="jsx-item" src={nextdoor} alt="Quote Image" />,
  <img key="jsx-item" src={Undercover} alt="Undercover Image" />,
  <img key="jsx-item" src={Undercover} alt="Undercover Image" />,
  <img key="jsx-item" src={Undercover} alt="Undercover Image" />,
  <img key="jsx-item" src={Undercover} alt="Undercover Image" />,
  <img key="jsx-item" src={Undercover} alt="Undercover Image" />,
  <img key="jsx-item" src={nextdoor} alt="Undercover Image" />,
  <img key="jsx-item" src={Undercover} alt="Undercover Image" />,
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
        <button className="bg-red-950 text-red-400 border border-red-400 border-b-4 font-medium overflow-hidden relative px-4 py-2 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group">
  <span className="bg-red-500 shadow-red-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
  LETS STARTED
</button>
      </div>
    </div>
  );
}

export default Index;
