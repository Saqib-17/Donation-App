import React, { useRef } from 'react';
import coin from '../assets/coin.png';
import { cashIn } from '../js/functions'; // we'll wire this next

const DonationCard = ({ image, place, description, defaultAmount, inputId, buttonId, cashId }) => {
  const inputRef = useRef(null);

  const handleDonate = (e) => {
    e.preventDefault();
    const amount = inputRef.current.value;
    cashIn(place, inputRef.current, cashId); // logic in functions.js
  };

  return (
    <div className="hero">
      <div className="hero-content flex flex-col lg:flex-row items-center gap-6 lg:gap-10 px-4 lg:px-8">
        <div className="hero-image flex-shrink-0">
          <img src={image} alt={place} className="rounded-lg w-full max-w-md" />
        </div>
        <div className="hero-text w-full">
          <button className="donation-btn flex items-center bg-lime-400 text-black font-bold text-lg px-4 py-2 rounded-md w-fit mb-4">
            <img src={coin} alt="Coin" className="w-6 h-6 mr-2" />
            <span>{defaultAmount}</span>
          </button>
          <h1 className="text-2xl font-bold mb-2">
            Donate for <span>{place}</span>, Bangladesh
          </h1>
          <p className="py-2 text-base font-light text-dark-3 mb-4">{description}</p>
          <div className="donation-form flex gap-2">
            <input type="text" placeholder="Write Donation Amount" ref={inputRef} className="input input-bordered w-full max-w-xs" />
            <button className="btn btn-ghost text-xl font-semibold bg-primary-color" onClick={handleDonate}>
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
