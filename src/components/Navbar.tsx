import { Link } from "react-router-dom";
import "../styles/Nav.css";
export default function Navbar() {
  return (
    <nav
      className="navbar bg-transparent text-white p-4 flex items-center justify-between"
      style={{ width: "100vw", position: "absolute", zIndex: "1001" }}
    >
      <div className="text-red-600 text-3xl font-bold tracking-wide">
        <Link to="/"> PK'FLIX</Link>
      </div>
      <div className="flex items-center gap-4">
        <div className="group">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="search-icon">
            <g>
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
            </g>
          </svg>
          <input
            id="query"
            className="input"
            type="search"
            placeholder="Find My List ..."
            name="searchbar"
          />
        </div>

        <button className="bg-red-800 px-3 py-1 rounded hover:bg-red-900">
          Sign in
        </button>
        <button className="Btn">
          <div className="sign">
            <svg viewBox="0 0 512 512">
              <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
            </svg>
          </div>

          <div className="text">Logout</div>
        </button>
      </div>
    </nav>
  );
}
