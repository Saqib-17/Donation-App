import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
    <div className="px-6 py-8">
      <h2 className="text-3xl font-bold mb-6">Donation History</h2>
      {donations.length === 0 ? (
        <p className="text-gray-500">No donations yet.</p>
      ) : (
        <div className="space-y-4">
          {donations.map((donation, index) => (
            <div key={index} className="p-4 rounded-md shadow-md bg-white border">
              <p className="text-lg font-semibold">
                Cause: <span className="text-primary">{donation.causeName}</span>
              </p>
              <p className="text-md">Amount: {donation.amount} BDT</p>
              <p className="text-sm text-gray-500">
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
