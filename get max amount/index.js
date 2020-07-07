/*write a function that takes 2 arguments, amount, coins and returns the maximum amount
of coins with biggest values, the sum of coins shouldn't excced the amount provided, you 
still need to collect maximum coins values to get the max amount value 


input:
amount: 42
coins: [1, 5, 10, 25]
output: [25, 10, 5, 1, 1]
*/

//solution: Greedy Algorithm
const getMaxCoins = (amount, coins, bag = []) => {
    if(amount === 0 ) return bag;
    let largestCoin = getLargestCoin(amount, coins);
    return getMaxCoins(amount - largestCoin, coins, bag.concat([largestCoin]))
}

const getLargestCoin = (amount, coins) => {
    //sorting coins
    const sortedCoins = coins.sort((a, b) => b - a);

    for (let i = 0; i < sortedCoins.length; i++) {
        //get the largest coin that still smaller or equal to the amount
        const current = sortedCoins[i];
        if (current <= amount) return current;
    }
}

getMaxCoins(42, [1, 5, 10, 25]); //[25, 10, 5, 1, 1]