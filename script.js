let money = 1000;
let line = "\r\n";

let menu =
  "1. Show Balance" +
  line +
  "2. Withdraw Money" +
  line +
  "3. Add Money" +
  line +
  "4. Exit" +
  line;

let choice = prompt(menu);
switch (choice) {
  case "1":
    alert("Balance: " + money);
    break;
  case "2":
    let withdrawAmount = +prompt("How much money do you want to withdraw?");
    if (withdrawAmount < money) {
      money = money - withdrawAmount;
      alert("Transaction successful. Balance: " + money);
    } else {
      alert("Insufficient funds. Balance: " + money);
    }
    break;
  case "3":
    let addAmount = +prompt("Enter the amount to add");
    money = money + addAmount;
    alert("Money successfully added. Balance: " + money);
    break;
  case "4":
    console.log("You have exited the system.");
    break;
  default:
    console.log("Please make a valid selection.");
    break;
}
