import React from "react";

const DonationHistory = ({ history }) => {
  return (
    <div id="donation-container">
      {history.map((entry, index) => (
        <div key={index} className="bg-secondary-color border rounded-xl p-6 mb-4">
          <p><strong>{entry.amount} Taka is Donated for {entry.location}, Bangladesh</strong></p>
          <p>Date : {entry.date} (Bangladesh Standard Time)</p>
        </div>
      ))}
    </div>
  );
};

export default DonationHistory;
