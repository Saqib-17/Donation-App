// src/js/functions.js

export function inputFinder(id) {
    const inputNum = document.getElementById(id).value;
    const inputNumber = parseFloat(inputNum);
    return isNaN(inputNumber) || inputNumber < 0 ? NaN : inputNumber;
  }
  
  export function textFinder(id) {
    const word = document.getElementById(id).innerText;
    const array = word.split(" ");
    return parseFloat(array[0]);
  }
  
  export function cashIn(loc, inputElement, balanceId) {
    const inputValue = inputElement.value;
    const amount = parseFloat(inputValue);
  
    if (isNaN(amount) || amount < 0) {
      alert("Failed to Donate! Please Enter a Valid Amount");
      return;
    }
  
    const existingBalance = textFinder(balanceId);
    const newBalance = amount + existingBalance;
  
    const balanceElement = document.getElementById(balanceId);
    if (balanceElement) balanceElement.innerText = `${newBalance} BDT`;
  
    modalShow();
    addToHistory(amount, loc);
  }
  
  export function cashOut(buttonId, inputId) {
    const button = document.getElementById(buttonId);
    if (!button) return;
  
    button.addEventListener("click", (event) => {
      event.preventDefault();
      const inputBalance = inputFinder(inputId);
      if (isNaN(inputBalance)) return;
  
      const existingBalance = textFinder("cash-out-btn");
      const newBalance = existingBalance - inputBalance;
  
      document.getElementById("cash-out-btn").innerText = `${newBalance} BDT`;
    });
  }
  
  export function togglePages(pageIdToShow) {
    const donationCard = document.getElementById("donation-card-form");
    const donationHistory = document.getElementById("donation-history-form");
  
    if (donationCard) donationCard.classList.add("hidden");
    if (donationHistory) donationHistory.classList.add("hidden");
  
    const showPage = document.getElementById(pageIdToShow);
    if (showPage) showPage.classList.remove("hidden");
  }
  
  export function scrollHandler() {
    const actionButton = document.getElementById("action-btn");
    if (!actionButton) return;
  
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        actionButton.classList.add("backdrop-blur-sm", "top-32", "bottom-28");
      } else {
        actionButton.classList.remove("backdrop-blur-sm", "top-32", "bottom-28");
      }
    });
  }
  
  export function modalShow() {
    const modal = document.getElementById("my_modal_1");
    if (modal?.showModal) modal.showModal();
  }
  
  export function addToHistory(amount, loc) {
    const historyContainer = document.getElementById("donation-container");
    if (!historyContainer) return;
  
    const div = document.createElement("div");
    div.classList.add("bg-secondary-color");
    div.style.border = "1px solid gray";
    div.style.margin = "20px 0";
    div.style.borderRadius = "16px";
    div.style.padding = "24px";
  
    const date = new Date().toLocaleString("en-US", {
      timeZone: "Asia/Dhaka",
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
  
    div.innerHTML = `
      <p><strong>${amount} Taka is Donated for ${loc}, Bangladesh</strong></p>
      <p>Date: ${date} (Bangladesh Standard Time)</p>
    `;
  
    historyContainer.appendChild(div);
  }
  