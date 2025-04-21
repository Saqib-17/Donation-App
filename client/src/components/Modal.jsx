import React from "react";
import coin from "../assets/coin.png";
import "../styles/Modal.css"; // make sure to create this CSS file or add styles in your main CSS

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="custom-modal-overlay">
      <div className="custom-modal-box">
        <img src={coin} alt="Coin" className="modal-coin-icon" />
        <h3 className="modal-title">Donation Successful!</h3>
        <p className="modal-message">Thank you for your generous donation. Your support matters!</p>
        <button onClick={onClose} className="modal-close-btn">Close</button>
      </div>
    </div>
  );
};

export default Modal;
