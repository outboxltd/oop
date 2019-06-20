// 1. Create an Account class, with a property: sum.
// The class will have 3 methods:


class Account {
    constructor(sum) {
        this.sum = sum;
    }

    // deposit(value) - deposit money to the account. Increase the sum.
    deposit(value) {
        this.sum += value;
        console.log("correct sum: " + this.sum)
    }

    // withdraw(value) - withdraw money from the account. Decrease the sum.
    withdraw(value) {
        this.sum -= value;
        console.log("correct sum: " + this.sum)
    }

    // canWithdraw(value) - check if the amount can be withdrawn from the account without reaching a minus. Returns boolean.
    canWithdraw(value) {
        if ((this.sum - value) > 0) {
            return true;
        } else {
            return false;
        }
    }

}

let user_with_money = new Account(500);

// 2. create a lottery function: lottery(account)



// 3. create an account instance, and play the lottery 5 times.
// 4. print the final sum.


function lottery(account) {
    // ● check that the participant can withdraw 100 dollars. If not print a message and exit.
    let canwithdraw = false;
    if (account.canWithdraw(100)) {
        canwithdraw = true;
        console.log('nice ' + canwithdraw);
    } else {
        console.log('bed');
    }

}


function wonOrnot(account) {
    // ● draw a random number from 0-100.
    // ● decide randomly if the participant won or lost.
    let randnum = Math.floor((Math.random() * 100) + 1)
    if ((randnum % 2) !== 0) {
        console.log("he won ! lucky num " + randnum)
        // ● in case he won - deposit the sum + 30 to the account.
        account.deposit(30);
        console.log(account.sum)
     } else {
        // ● in case the participant lost - withdraw the sum from the account.
        account.withdraw(30);
        console.log(account.sum)
        console.log("he lost")


     }
}





