document.getElementById("withdraw-btn").addEventListener("click", function () {
  const withdrawField = document.getElementById("withdraw-field");
  const withdrawAmountString = withdrawField.value;
  const NewWithdrawAmount = parseFloat(withdrawAmountString);

  withdrawField.value = "";

  const PreviousWithdrawAmount = document.getElementById("withdraw-amount");
  const previousWithdrawAmountString = PreviousWithdrawAmount.innerText;
  const PreviousWithdrawTotal = parseFloat(previousWithdrawAmountString);

  const newWithdrawTotal = NewWithdrawAmount + PreviousWithdrawTotal;
  PreviousWithdrawAmount.innerText = newWithdrawTotal;

  const previousTotalBalance = document.getElementById("total-balance");
  const previousTotalBalanceString = previousTotalBalance.innerText;
  const newTotalBalance = parseFloat(previousTotalBalanceString);

  const totalBalance = newTotalBalance - NewWithdrawAmount;
  previousTotalBalance.innerText = totalBalance;
});
