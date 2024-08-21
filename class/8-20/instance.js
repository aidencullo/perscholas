class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log('Insufficient funds.');
    }
  }

  getBalance() {
    return this.balance;
  }
}

// Create an instance of BankAccount
const account = new BankAccount(1000);

// Modify state using instance methods
account.deposit(500);
account.withdraw(200);
console.log(account.getBalance());  // Output: 1300

