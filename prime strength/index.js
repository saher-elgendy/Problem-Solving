//problem link in edaabit: https://edabit.com/challenge/n3w4fqdaMuCB9bjgs

//solution

const primeStrength = (number) => {
    const previousPrime = getPreviousPrime(number);
    const nextPrime = getNextPrime(number);
    const mean = (nextPrime + previousPrime) / 2;

    if (number > mean) return 'Strong';
    else if (number < mean) return 'Weak';
    else return 'Balanced';
}

const getPreviousPrime = (number) => {
    while (number >= 2) {
        number--;
        if (isPrime(number)) return number;
    }
}

const getNextPrime = (number) => {
    while (number <= Math.pow(number, 2)) {
        number++;
        if (isPrime(number)) return number;
    }
}

const isPrime = (number) => {
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return number > 1;
}


primeStrength(17); //strong
primeStrength(211) // balanced
primeStrength(19) //weak