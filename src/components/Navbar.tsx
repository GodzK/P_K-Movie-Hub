import { Link } from "react-router-dom";
import { JSX } from "react";
import "../styles/Nav.css";


export default function Navbar(): JSX.Element {
  return (
    <nav
      className="navbar bg-transparent text-white p-4 flex items-center justify-between"
      style={{ width: "100%", position: "absolute", zIndex: 1001 }}
    >
      <div className="text-red-600 text-3xl font-bold tracking-wide">
        <Link to="/">PK'FLIX</Link>
      </div>
      <div className="flex items-center gap-4">
       
      </div>
    </nav>
  );
}