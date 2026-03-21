let cashOut = document.querySelector("#withdraw-btn");
const cashoutSection = document.querySelector("#Cashout-section");
cashoutSection.classList.add("hide");
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

const cashOutBtn = document.querySelector("#cashout-btn");
cashOutBtn.addEventListener("click", function () {
    const cashoutSection2 = cashoutSection;
    //cashoutSection2.classList.remove("hide");
    cashoutSection2.classList.toggle("hide");
})