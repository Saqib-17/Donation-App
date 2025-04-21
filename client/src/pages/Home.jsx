import React, { useState } from 'react';
import noakhali from '../assets/noakhali.png';
import feni from '../assets/feni.png';
import quota from '../assets/quota-protest.png';
import coin from '../assets/coin.png';
import Modal from '../components/Modal';

const Home = () => {
  const [donations, setDonations] = useState([
    {
      id: 1,
      image: noakhali,
      place: "Flood at Noakhali",
      description:
        "The recent floods in Noakhali have caused significant damage to homes infrastructure. Your donation will help provide essential supplies and to those affected by this disaster.",
      defaultAmount: "100 BDT",
      balance: 0,
    },
    {
      id: 2,
      image: feni,
      place: "Flood at Feni",
      description:
        "Feni was recently struck by devastating floods, leaving many families homeless and in need of basic necessities.",
      defaultAmount: "500 BDT",
      balance: 0,
    },
    {
      id: 3,
      image: quota,
      place: "Aid for Injured in the Quota Movement",
      description:
        "Help the injured students who suffered during the recent quota movement. Your donation can help cover medical treatment and support for families.",
      defaultAmount: "700 BDT",
      balance: 0,
    },
  ]);

  const [modalInfo, setModalInfo] = useState({ isVisible: false, position: null });

  const handleDonate = (e, id, inputId) => {
    const input = document.getElementById(inputId);
    const donationAmount = parseFloat(input.value);

    if (isNaN(donationAmount) || donationAmount <= 0) {
      alert("Please enter a valid donation amount.");
      return;
    }

    const mainBalanceElement = document.getElementById("cash-out-btn");
    const currentMainBalance = parseFloat(mainBalanceElement.innerText);

    if (donationAmount > currentMainBalance) {
      alert("You don't have enough balance!");
      return;
    }

    // Update card's balance
    setDonations((prev) =>
      prev.map((donation) =>
        donation.id === id
          ? { ...donation, balance: donation.balance + donationAmount }
          : donation
      )
    );

    // Update main balance
    const newMainBalance = currentMainBalance - donationAmount;
    mainBalanceElement.innerText = `${newMainBalance} BDT`;

    // Show modal at button position
    const rect = e.target.getBoundingClientRect();
    const position = {
      top: rect.top + window.scrollY,
      left: rect.left + rect.width / 2,
    };
    setModalInfo({ isVisible: true, position });

    // Clear input
    input.value = "";
  };

  const closeModal = () => {
    setModalInfo({ isVisible: false, position: null });
  };

  return (
    <>
      {donations.map(({ id, image, place, description, defaultAmount, balance }) => (
        <div className="hero" key={id}>
          <div className="hero-content flex flex-col lg:flex-row items-center gap-6 lg:gap-10 px-4 lg:px-8">
            <div className="hero-image flex-shrink-0">
              <img src={image} alt={place} className="rounded-lg w-full max-w-md" />
            </div>
            <div className="hero-text w-full">
              <button className="donation-btn flex items-center bg-lime-400 text-black font-bold text-lg px-4 py-2 rounded-md w-fit mb-4">
                <img src={coin} alt="Coin" className="w-6 h-6 mr-2" />
                <span>{balance} BDT</span>
              </button>
              <h1 className="text-2xl font-bold mb-2">
                Donate for <span>{place}</span>, Bangladesh
              </h1>
              <p className="py-2 text-base font-light text-dark-3 mb-4">{description}</p>
              <div className="donation-form">
                <input
                  type="text"
                  id={`donation-input-${id}`}
                  placeholder="Write Donation Amount"
                />
                <button
                  className="btn btn-ghost text-xl font-semibold bg-primary-color"
                  onClick={(e) => handleDonate(e, id, `donation-input-${id}`)}
                >
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      <Modal isVisible={modalInfo.isVisible} onClose={closeModal} position={modalInfo.position} />
    </>
  );
};

export default Home;
