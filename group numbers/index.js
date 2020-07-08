/*
  input: [6.1, 4.2, 6.3]
  function: Math.floor
  output: { '4': [ 4.2 ], '6': [ 6.1, 6.3 ] }
*/

// solution:
const groupBy = (numbers, fn, bag = {}) => {
    if (!numbers.length) return bag;
    const firstEl = fn(numbers[0]);
    const matched = numbers.filter(el => firstEl === fn(el));
    const unMatched = numbers.filter(el => firstEl !== fn(el));
    return groupBy(
        unMatched,
        fn,
        { ...bag, ...{ [firstEl]: matched } }
    )
}

groupBy([6.1, 6.2, 4.3, 4], Math.floor)