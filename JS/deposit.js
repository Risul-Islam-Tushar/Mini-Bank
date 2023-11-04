document.getElementById("deposit-btn").addEventListener("click", function () {
  const depositField = document.getElementById("deposit-Field");
  const DepositAmountString = depositField.value;
  const NewDepositAmount = parseFloat(DepositAmountString);

  depositField.value = "";

  const PreviousDepositAmount = document.getElementById("deposit-amount");
  const depositAmountString = PreviousDepositAmount.innerText;
  const PreviousDepositTotal = parseFloat(depositAmountString);

  const newDepositTotal = NewDepositAmount + PreviousDepositTotal;
  PreviousDepositAmount.innerText = newDepositTotal;

  const previousTotalBalance = document.getElementById("total-balance");
  const previousTotalBalanceString = previousTotalBalance.innerText;
  const newTotalBalance = parseFloat(previousTotalBalanceString);

  const totalBalance = newTotalBalance + NewDepositAmount;
  previousTotalBalance.innerText = totalBalance;
});
