function removeEvenIntegers(arr) {
    return arr.filter(value => (value % 2) > 0);
}

const oddIntegers = removeEvenIntegers([0, 1, 2, 5]);
const expectedIntegers = [1, 5];

evenIntegersRemovedSuccessfully = oddIntegers.toString() === expectedIntegers.toString();

console.log("Even Integers Removed Successfully: " + evenIntegersRemovedSuccessfully);