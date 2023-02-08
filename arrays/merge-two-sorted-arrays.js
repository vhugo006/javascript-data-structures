/*
** Given two sorted arrays, merge them into one array that is sorted.
*/

/*
** This is not the best solution because, since we are using array sort() function, the time complexity will be O(nlogn).
*/
function mergeArraysUsingSortFunction(arr1, arr2) {

    let concatenatedArray = arr1.concat(arr2);
    return concatenatedArray.sort((a, b) => a - b);
}

/*
** As we iterate both arrays over once, the time complexity will be O(n + m), where n and m are the lengths of arr1 and arr2.
*/
function mergeAndSortArray(arr1, arr2) {

    let i = 0, j = 0;
    let fullSortedArray = [];

    if (arr1.length === 0 && arr2.length > 0)
        return arr2;

    if (arr2.length === 0 && arr1.length > 0)
        return arr1;


    while (i < arr1.length) {
        if (arr1[i] <= arr2[j]) {
            fullSortedArray.push(arr1[i]);
            i++;
        } else {
            fullSortedArray.push(arr2[j]);
            j++;

            if (j == arr2.length)
                break;
        }
    }

    if (i < arr1.length) {
        arr1.splice(0, i);
        fullSortedArray = fullSortedArray.concat(arr1);
    }

    if (j < arr2.length) {
        arr2.splice(0, j);
        fullSortedArray = fullSortedArray.concat(arr2);
    }

    return fullSortedArray;
}


function givenArraysWithNegativeValuesShouldMergeAndSort() {

    arr1 = [-133, -100, 0, 4];
    arr2 = [-2000, 2000];

    let result = mergeAndSortArray(arr1, arr2);
    let expected = [-2000, -133, -100, 0, 4, 2000];

    if (result.toString() !== expected.toString()) {
        console.error(`Test failed: expected ${expected} but got ${result}`);
    } else {
        console.log("'givenArraysWithNegativeValuesShouldMergeAndSort': Test passed");
    }
}
givenArraysWithNegativeValuesShouldMergeAndSort();

function givenRightEmptyArrayShouldMergeAndSort() {

    arr1 = [1, 4, 45, 63];
    arr2 = [];

    let result = mergeAndSortArray(arr1, arr2);
    let expected = [1, 4, 45, 63];

    if (result.toString() !== expected.toString()) {
        console.error(`Test failed: expected ${expected} but got ${result}`);
    } else {
        console.log("'givenRightEmptyArrayShouldMergeAndSort': Test passed");
    }
}
givenRightEmptyArrayShouldMergeAndSort();

function givenTwoEmptyArraysShouldReturnAnEmptyArray() {

    arr1 = [];
    arr2 = [];

    let result = mergeAndSortArray(arr1, arr2);
    let expected = [];

    if (result.toString() !== expected.toString()) {
        console.error(`Test failed: expected ${expected} but got ${result}`);
    } else {
        console.log("'givenTwoEmptyArraysShouldReturnAnEmptyArray': Test passed");
    }
}
givenTwoEmptyArraysShouldReturnAnEmptyArray();

function givenLeftEmptyArrayShouldMergeAndSort() {

    arr1 = [];
    arr2 = [1, 2, 3, 4, 5];

    let result = mergeAndSortArray(arr1, arr2);
    let expected = [1, 2, 3, 4, 5];

    if (result.toString() !== expected.toString()) {
        console.error(`Test failed: expected ${expected} but got ${result}`);
    } else {
        console.log("'givenLeftEmptyArrayShouldMergeAndSort': Test passed");
    }
}
givenLeftEmptyArrayShouldMergeAndSort();

function givenTwoSortedArraysShouldMergeAndSort() {

    arr1 = [3, 7, 11, 13, 17, 20, 22];
    arr2 = [1, 5, 9, 15, 29];

    let result = mergeAndSortArray(arr1, arr2);
    let expected = [1, 3, 5, 7, 9, 11, 13, 15, 17, 20, 22, 29];

    if (result.toString() !== expected.toString()) {
        console.error(`Test failed: expected ${expected} but got ${result}`);
    } else {
        console.log("'givenTwoSortedArraysShouldMergeAndSort': Test passed");
    }
}
givenTwoSortedArraysShouldMergeAndSort();


function givenTheFirstArrayLengthIsEqualToSecondOneShouldMergeAndSort() {

    arr1 = [7, 8];
    arr2 = [1, 3];

    let result = mergeAndSortArray(arr1, arr2);
    let expected = [1, 3, 7, 8];

    if (result.toString() !== expected.toString()) {
        console.error(`Test failed: expected ${expected} but got ${result}`);
    } else {
        console.log("'givenTheFirstArrayLengthIsEqualToSecondOneShouldMergeAndSort': Test passed");
    }
}
givenTheFirstArrayLengthIsEqualToSecondOneShouldMergeAndSort();

function givenTheFirstArrayLengthLessThanTheSecondOneShouldMergeAndSort() {

    arr1 = [1, 3];
    arr2 = [2, 6, 7, 8];

    let result = mergeAndSortArray(arr1, arr2);
    let expected = [1, 2, 3, 6, 7, 8];

    if (result.toString() !== expected.toString()) {
        console.error(`Test failed: expected ${expected} but got ${result}`);
    } else {
        console.log("'givenTheFirstArrayLengthLessThanTheSecondOneShouldMergeAndSort': Test passed");
    }
}
givenTheFirstArrayLengthLessThanTheSecondOneShouldMergeAndSort();

function givenTheFirstArrayLengthGreaterThanSecondOneShouldMergeAndSort() {

    arr1 = [2, 6, 7, 8];
    arr2 = [1, 3];

    let result = mergeAndSortArray(arr1, arr2);
    let expected = [1, 2, 3, 6, 7, 8];

    if (result.toString() !== expected.toString()) {
        console.error(`Test failed: expected ${expected} but got ${result}`);
    } else {
        console.log("'givenTheFirstArrayLengthGreaterThanSecondOneShouldMergeAndSort': Test passed");
    }
}
givenTheFirstArrayLengthGreaterThanSecondOneShouldMergeAndSort();
