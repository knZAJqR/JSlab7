function frankenSplice(arr1, arr2, n) 
{
    let newArr2 = [...arr2]; 
  
    newArr2.splice(n, 0, ...arr1);
  
    return newArr2;
}

let result1 = frankenSplice([1, 2, 3], [4, 5, 6], 1);
console.log(result1); // [4, 1, 2, 3, 5]

let result2 = frankenSplice([1, 2, 3], [4, 5], 1);
console.log(result2); // [4, 1, 2, 3, 5]

let result3 = frankenSplice([1, 2], ["a", "b"], 1);
console.log(result3); // ["a", 1, 2, "b"]

let result4 = frankenSplice([1, 2, 3, 4], [], 0);
console.log(result4); // [1, 2, 3, 4]