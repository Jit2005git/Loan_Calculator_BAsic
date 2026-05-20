function calculateLoan() {
  const loanAmountValue = parseFloat(document.getElementById("loan-amount").value) || 0;
  const interestRateValue = parseFloat(document.getElementById("interest-rate").value) || 0;
  const monthsToPayValue = parseInt(document.getElementById("months-to-pay").value, 10) || 1;

  const interest = (loanAmountValue * (interestRateValue * 0.01)) / monthsToPayValue;
  const monthlyPayment = loanAmountValue / monthsToPayValue + interest;
  const formattedPayment = monthlyPayment.toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  });

  document.getElementById("payment").textContent = formattedPayment;
}

window.addEventListener("DOMContentLoaded", calculateLoan);

