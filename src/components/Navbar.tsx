export default function Navbar() {
  return (
    <nav className="navbar bg-transparent text-white p-4 flex items-center justify-between" style={{width:"100vw" , position:"absolute" , zIndex:"1001"}}>
      <div className="text-red-600 text-3xl font-bold tracking-wide">
        PK'FLIX
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-gray-800 px-3 py-1 rounded hover:bg-gray-700">
          🌐English
        </button>
        <button className="bg-red-800 px-3 py-1 rounded hover:bg-red-900">
          Sign in
        </button>
      </div>
    </nav>
  );
}
