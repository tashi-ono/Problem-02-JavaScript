class CountDuplicates {
  countDups(input) {
    // take in input array
    // create new variable of empty object
    // create count variable set to 0
    // loop over array
    // if empty object contains element in array, add 1 or instantiate to 1
    // if object value is > 1
    // increment count by 1

    let obj = {};
    let count = 0;
    for (let element of input) {
      obj[element] = obj[element] + 1 || 1;
    }

    for (let value in obj) {
      if (obj[value] > 1) {
        count += 1;
      }
    }
    return count;
  }
}

module.exports = CountDuplicates;
// let a = [1, 2, 3, 4, 5, 1, 3, 2, 3, 6, 6, 3, 3, 2, 5];
// console.log(countDups(a)); // Expect 5
