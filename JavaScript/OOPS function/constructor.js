function BankAccount(customerName,balance = 0){
    this.customerName = customerName;
    this.AccountNumber = Date.now();
    this.balance = balance;

    this.deposit = function(amount){
        this.balance += amount;
    };

    this.withdraw = (amount)=>{
        this.balance -= amount;
    };

}

const samirAccount = new BankAccount('samir',1000);
const samAccount = new BankAccount('sam khan');

samirAccount.deposit(5000);
samirAccount.withdraw(2000);

console.log(samirAccount, samAccount);

// const accounts = [ ];
// const accountform = document.querySelector('#accountform');
// const customerName = document.querySelector('#customerName');
// const balance = document.querySelector('#balance');

// accountform.addEventListener('submit', (e) =>{
//     e.preventDefault();
//     const account = new BankAccount(customerName.value,+balance.value);
//     accounts.push(account)
//     console.log(accounts);

// });