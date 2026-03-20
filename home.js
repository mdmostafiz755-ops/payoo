let cashOut = document.querySelector("#withdraw-btn");

cashOut.addEventListener('click', function () {

    let balanceElement = document.querySelector("#balance");
    let balance = balanceElement.innerText;

    let amountInput = document.querySelector("#amount");
    let pinInput = document.querySelector("#password-cashout");

    let cashOutAmount = amountInput.value;
    let cashOutPin = pinInput.value;

    let newBalance = Number(balance) - Number(cashOutAmount);

    if (cashOutPin != "1234" || newBalance < 0) {
        alert("Invalid Credential");
        return;
    } 
    else {
        alert("Withdraw successful");
        balanceElement.innerText = newBalance;

        amountInput.value = "";
        pinInput.value = "";
    }
});