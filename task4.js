function getIndexToIns(arr, num) 
{
    arr.sort((a, b) => a - b); 
  
    let index = arr.findIndex((element) => element >= num); 
  
    return index !== -1 ? index : arr.length;
}

let result1 = getIndexToIns([1, 2, 3, 4], 1.5);
console.log(result1); // 1

let result2 = getIndexToIns([20, 3, 5], 19);
console.log(result2); // 2

let result3 = getIndexToIns([10, 20, 30, 40, 50], 35);
console.log(result3); // 3

let result4 = getIndexToIns([10, 20, 30, 40, 50], 30);
console.log(result4); // 2

let result5 = getIndexToIns([3, 10, 5], 3);
console.log(result5); // 0

let result6 = getIndexToIns([5, 3, 20, 3], 5);
console.log(result6); // 2