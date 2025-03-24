import React from "react";
import "../styles/modal.css";

interface ModalProps {
  image: string;
  desc : string | null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ image,desc, onClose }) => {
  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
              fill="white"
            />
          </svg>
        </button>
        <div className="modal-image">
          <img src={image} alt="Selected Movie" />
          <div className="image-gradient"></div>
          <div className="play-button-overlay">
            <button className="play-button">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M8 5V19L19 12L8 5Z" fill="white" />
              </svg>
              <span>Play</span>
            </button>
          </div>
        </div>
        <div className="modal-details">
          <div className="modal-meta">
            <span className="match-score">98% Match</span>
            <span className="year">2023</span>
            <span className="maturity">16+</span>
            <span className="duration">2h 14m</span>
            <span className="quality">HD</span>
          </div>
          <p className="modal-description">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
