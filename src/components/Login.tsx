import React from "react";
import { JSX } from "react";
interface LoginProps {
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ onClose }): JSX.Element => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[1000]"
      onClick={handleOverlayClick}
    >
      <div className="relative w-full max-w-[450px] bg-black bg-opacity-85 rounded-md p-[60px_68px_40px] text-white">
        <button
          className="absolute top-4 right-4 bg-none border-none cursor-pointer"
          onClick={onClose}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="white"/>
          </svg>
        </button>
        <div className="modal-body">
          <h2 className="text-[32px] font-bold mb-7">Sign In</h2>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-4">
              <input
                type="text"
                id="email"
                placeholder="Email or phone number"
                required
                autoComplete="email"
                className="w-full p-4 bg-[#333] border-none rounded text-white text-base placeholder-[#8c8c8c] focus:bg-[#454545] focus:outline-none"
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                id="password"
                placeholder="Password"
                required
                autoComplete="current-password"
                className="w-full p-4 bg-[#333] border-none rounded text-white text-base placeholder-[#8c8c8c] focus:bg-[#454545] focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-[#e50914] text-white text-base font-medium py-4 rounded mt-6 mb-3 cursor-pointer hover:bg-[#f40612]"
            >
              Sign In
            </button>
            <div className="flex justify-between items-center mt-3">
              <label className="flex items-center text-[#b3b3b3] text-[13px]">
                <input type="checkbox" defaultChecked className="mr-1" />
                Remember me
              </label>
              <a href="#" className="text-[#b3b3b3] text-[13px] no-underline hover:underline">
                Need help?
              </a>
            </div>
          </form>
          <div className="mt-4 text-[#737373] text-base">
            <p>
              New to PKFLIX ? {" "}
              <a href="#" className="text-white no-underline hover:underline">
                Sign up now
              </a>
              .
            </p>
            <p className="text-[13px] mt-4">
              This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
              <a href="#" className="text-[#0071eb] no-underline hover:underline">
                Learn more
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;