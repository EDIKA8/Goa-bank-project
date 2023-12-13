const balanceElement = document.getElementById("balance");
const depositButton = document.getElementById("depositBtn");
const withdrawButton = document.getElementById("withdrawBtn");
const transactionList = document.getElementById("transactionList");

let balance = 1000;

function updateBalance() {
    balanceElement.textContent = balance.toFixed(2);
}

function addTransaction(type, amount) {
    const listItem = document.createElement("li");
    listItem.textContent = `${type}: $${amount.toFixed(2)}`;
    transactionList.appendChild(listItem);
}

depositButton.addEventListener("click", () => {
    const depositAmount = parseFloat(prompt("Enter deposit amount:"));
    if (!isNaN(depositAmount) && depositAmount > 0) {
        balance += depositAmount;
        addTransaction("Deposit", depositAmount);
        updateBalance();
    } else {
        alert("Invalid deposit amount");
    }
});

withdrawButton.addEventListener("click", () => {
    const withdrawAmount = parseFloat(prompt("Enter withdraw amount:"));
    if (!isNaN(withdrawAmount) && withdrawAmount > 0 && withdrawAmount <= balance) {
        balance -= withdrawAmount;
        addTransaction("Withdraw", withdrawAmount);
        updateBalance();
    } else {
        alert("Invalid withdraw amount");
    }
});

updateBalance();
