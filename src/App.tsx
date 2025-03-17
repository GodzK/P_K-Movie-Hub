import { useState } from "react";
import Navbar from "./components/Navbar";
import Homepage from "./pages";
import Login from "./components/Login";

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState<boolean>(false);

  const openLoginModal = (): void => setIsLoginModalOpen(true);
  const closeLoginModal = (): void => setIsLoginModalOpen(false);

  return (
    <div className="div-container">
      <Navbar onSignInClick={openLoginModal} />
      <Homepage />
      {isLoginModalOpen && <Login onClose={closeLoginModal} />}
    </div>
  );
}

export default App;