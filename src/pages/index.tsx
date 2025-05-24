import "../styles/Home.css";
import Background from "../components/Background";
import Twinkling from "../../src/images/twinkling-watermelon.png";
import Undercover from "../../src/images/undercover.jpg";
import Qot from "../../src/images/qot.jpg";
import lovelyrunner from "../../src/images/lovelyrunner.jpg";
import startup from "../../src/images/startup.jpg";
import tangurine from "../../src/images/tangurine.jpg";
import topgun from "../../src/images/topgun.jpg";
import vagabond from "../../src/images/vagabond.jpg";
import twenty from "../../src/images/20cen.jpg";
import nextdoor from "../../src/images/nextdoor.jpg";
import hyperknife from "../../src/images/hyperknife.jpg";
import friendlyrivalry from "../../src/images/friendly-rivalry.jpg";
import mydearestnemesis from "../../src/images/dearest-nemesis.jpg";
import residentplaybook from "../../src/images/resident-playbook.png";
import weakhero from "../../src/images/weakhero.jpg";
import weakhero2 from "../../src/images/weakhero2.png";
import moving from "../../src/images/moving.jpg";
import alchemyofsoul from "../../src/images/alchemy.jpg";
import { JSX } from "react";
import { Link } from "react-router-dom";

const items: JSX.Element[] = [
<img key="vagabond-1" src={vagabond} alt="Vagabond Image" />,
  <img key="twinkling-watermelon-1" src={Twinkling} alt="Twinkling Watermelon Image" />,
  <img key="resident-playbook-1" src={residentplaybook} alt="Resident Playbook Image" />,
  <img key="queen-of-tears-1" src={Qot} alt="Queen of Tears Image" />,
  <img key="tangerine-1" src={tangurine} alt="Tangerine Image" />,
  <img key="weak-hero-class-2-1" src={weakhero2} alt="Weak Hero Class 2 Image" />,
  <img key="next-door-1" src={nextdoor} alt="Next Door Image" />,
  <img key="lovely-runner-1" src={lovelyrunner} alt="Lovely Runner Image" />,
  <img key="my-dearest-nemesis-1" src={mydearestnemesis} alt="My Dearest Nemesis Image" />,
  <img key="hyper-knife-1" src={hyperknife} alt="Hyper Knife Image" />,
  <img key="start-up-1" src={startup} alt="Start-Up Image" />,
  <img key="friendly-rivalry-1" src={friendlyrivalry} alt="Friendly Rivalry Image" />,
  <img key="20th-century-girl-1" src={twenty} alt="20th Century Girl Image" />,
  <img key="undercover-high-school-1" src={Undercover} alt="Undercover High School Image" />,
  <img key="top-gun-1" src={topgun} alt="Top Gun Image" />,
  <img key="moving-1" src={moving} alt="Moving Image" />,
  <img key="weak-hero-class-1-1" src={weakhero} alt="Weak Hero Class 1 Image" />,
  <img key="twinkling-watermelon-2" src={Twinkling} alt="Twinkling Watermelon Image" />,
  <img key="resident-playbook-2" src={residentplaybook} alt="Resident Playbook Image" />,
   <img key="alchemy-of-soul" src={alchemyofsoul} alt="Hyper Knife Image" />,
  <img key="queen-of-tears-2" src={Qot} alt="Queen of Tears Image" />,
  <img key="moving-2" src={moving} alt="Moving Image" />,
  <img key="tangerine-2" src={tangurine} alt="Tangerine Image" />,
  <img key="lovely-runner-2" src={lovelyrunner} alt="Lovely Runner Image" />,
  <img key="next-door-2" src={nextdoor} alt="Next Door Image" />,
  <img key="alchemy-of-soul" src={alchemyofsoul} alt="Hyper Knife Image" />,
  <img key="start-up-2" src={startup} alt="Start-Up Image" />,
  <img key="20th-century-girl-2" src={twenty} alt="20th Century Girl Image" />,
];

function Index() {
  return (
    <div className="home-container">
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