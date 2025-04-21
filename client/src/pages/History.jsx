import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/History.css'; // ✅ Correct path if CSS is in styles folder

const History = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/donations');
        setDonations(res.data);
      } catch (err) {
        console.error('Error fetching donation history:', err);
      }
    };

    fetchDonations();
  }, []);

  return (
    <div className="history-container">
    <p className='dnt-title'>Donation History</p>
      {donations.length === 0 ? (
        <p className="history-empty">No donations yet.</p>
      ) : (
        <div className="history-list">
          {donations.map((donation, index) => (
            <div key={index} className="history-card">
              <p className="history-cause">
                Cause: <span className="highlight">{donation.causeName}</span>
              </p>
              <p className="history-amount">Amount: {donation.amount} BDT</p>
              <p className="history-date">
                Date: {new Date(donation.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default History;
