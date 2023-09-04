// theory of the game
// 1-> deposit some money for start game
// 2-> determine number of lines to bet on
// 3-> collect how many user is betting on this machine, collect a bet amount
// 4-> Spin the slot machine
// 5-> check it the user won
// 6-> give the user their winning
// 7-> play again

const prompt = require("prompt-sync")();

const deposit = () =>{
    const depositAmount = prompt("Enter a amount you want to betting: ");
    const numberDepositAmount = parseFloat(depositAmount);

    //check amount is not irrelevant string like 'hello' or is 0 or is negative 
    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0){
        console.log("Invalid deposit amount try again");
    }else{
        return numberDepositAmount;
    }
};

const getNumberOfLines = () =>{
    while(true){
        const lines = prompt("Enter the number of lines to bet on (1-3): ");
        const numberOfLines = parseFloat(lines);

        if(isNaN(numberOfLines) || numberOfLines <=0 || numberOfLines>3){
            console.log("Invalid number of lines")
        }else{
            return numberOfLines
        }
    }
}

const depositAmpount = deposit();
const numberOfLines = getNumberOfLines()
console.log(numberOfLines)
