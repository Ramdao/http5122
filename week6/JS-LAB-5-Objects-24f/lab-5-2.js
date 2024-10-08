//#### LAB 5 - OBJECTS ####
//PART 2:  CREATE A BANK CUSTOMER OBJECT
//1. Create the object structure first.
//2. Add the required properties to your object.
//3. Add your first method and test it. Remember, the methods will change the properties of the object.
//4. Add your second method and test it.
//5. Create the required output to complete steps 6-10 of the lab.
//6. Once everything is working, tackle the Stretch Goal!

var bankAccount ={
    lastName: "Ali",
    branchNumber:12345,
    accountBalance: 500.25,
    interestRate: 1.03,
    multipleAccounts:true,
    makeDeposit: function (value){
        this.accountBalance+= value;
        return "Thank you, your currnet balance is now "+ this.accountBalance.toFixed(2);
    },
    makeWithdrawal: function(value){
        this.accountBalance-= value;
        return "Thank you, your currnet balance is now "+ this.accountBalance.toFixed(2);
    },
    addInterest: function(flag){
        this.multipleAccounts=flag;
        if(this.multipleAccounts==true){
            this.accountBalance*=(this.interestRate+0.005);
        } else{
            this.accountBalance*=this.interestRate;
        }
        var total= this.accountBalance;
        return "Thank you, your currnet balance is now "+ this.accountBalance.toFixed(2);
    }

}

console.log(bankAccount.accountBalance);
bankAccount.makeDeposit(200);
console.log(bankAccount.accountBalance);
bankAccount.makeWithdrawal(75);
console.log(bankAccount.accountBalance);
bankAccount.addInterest(false);
console.log(bankAccount.accountBalance.toFixed(2));
bankAccount.addInterest(true);
console.log(bankAccount.accountBalance.toFixed(2));
