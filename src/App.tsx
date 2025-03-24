import { useState } from "react";
import Navbar from "./components/Navbar";
import Homepage from "./pages";
import Login from "./components/Login";

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  
  const closeLoginModal = (): void => setIsLoginModalOpen(false);

  return (
    <div className="div-container">
      <Navbar  />
      <Homepage />
      {isLoginModalOpen && <Login onClose={closeLoginModal} />}
    </div>
  );
}

export default App;