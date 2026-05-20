const currencySettings = {
  INR: { locale: "en-IN", symbol: "₹" },
  USD: { locale: "en-US", symbol: "$" },
  EUR: { locale: "de-DE", symbol: "€" },
  GBP: { locale: "en-GB", symbol: "£" },
};

function calculateLoan() {
  const loanAmountValue = parseFloat(document.getElementById("loan-amount").value) || 0;
  const interestRateValue = parseFloat(document.getElementById("interest-rate").value) || 0;
  const monthsToPayValue = parseInt(document.getElementById("months-to-pay").value, 10) || 1;
  const currency = document.getElementById("currency").value;
  const settings = currencySettings[currency] || currencySettings.INR;

  const interest = (loanAmountValue * (interestRateValue * 0.01)) / monthsToPayValue;
  const monthlyPayment = loanAmountValue / monthsToPayValue + interest;
  const formattedPayment = monthlyPayment.toLocaleString(settings.locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  });

  document.getElementById("payment").textContent = formattedPayment;
  document.querySelector(".prefix").textContent = settings.symbol;
}

window.addEventListener("DOMContentLoaded", calculateLoan);

