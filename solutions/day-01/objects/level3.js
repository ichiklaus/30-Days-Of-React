let personAccount = {
    firstName: "Nicolas",
    lastName: "Moreira",
    incomes: {
        totalIncome: 55,
        addIncome: function(income) {
            return this.totalIncome += income;
        },
    },
    expenses: {
        totalExpense: 0,
        addExpense: function(expense) {
            return this.totalExpense += expense;
        },
    },
    accountInfo: function(){
        return `${this.firstName} ${this.lastName} has a balance of \$${this.accountBalance()}.`;
    },
    accountBalance: function() {
        return this.incomes.totalIncome - this.expenses.totalExpense;
    },
};

personAccount.incomes.addIncome(10);
personAccount.expenses.addExpense(27);
// console.log(personAccount.incomes.totalIncome);
// console.log(personAccount.expenses.totalExpense);
console.log(personAccount.accountInfo());
//console.log(personAccount.accountBalance());

