//Write a function that check if all objects in an array have the same keys and values
//[{a: 1, b: 2}, {a: 1, b: 2}, {b: 2, a: 1}] // true
//[{a: 1, b: 2}, {a: 1, b: 2}, {a: 2, b: 1}] // false
//[{a: 1}, {a: 1, b: 2}, {a: 1, b: 2}] //false
//[{a: 1, b: 2}, {a: 1, b: 2, c: 3}, {a:2, b: 1 }] //false

const checkObjectsKeysAndValuesEquality = (arr) => {
    //looping through the array, check equality between the first object and the rest
    //if any object doesn't have same values and keys of first object, return false
    for (let i = 1; i < arr.length; i++) {
        if (!areEqual(arr[0], arr[i])) return false;
    }

    return true;
}

const areEqual = (a, b) => {
    //extracting keys of two objects
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    //if any value related to the same key in both objects not equal, return false
    if (aKeys.length !== bKeys.length) return false;

    for (key in a) {
        if (a[key] !== b[key]) return false;
    }

    return true;
}

checkObjectsKeysAndValuesEquality([{ a: 1, b: 2 }, { a: 1, b: 2 }, { b: 2, a: 1 }]); // true
checkObjectsKeysAndValuesEquality([{ a: 1, b: 2 }, { a: 1, b: 2, c: 3 }, { a: 2, b: 1 }]) //false

