function bouncer(arr) 
{
    let filteredArr = arr.filter(Boolean);
    return filteredArr;
}

let result1 = bouncer([7, "ate", "", false, 9]);
console.log(result1);  // [7, "ate", 9]

let result2 = bouncer(["a", "b", "c"]);
console.log(result2);  // ["a", "b", "c"]

let result3 = bouncer([false, null, 0, NaN, undefined, ""]);
console.log(result3);  // []

let result4 = bouncer([null, NaN, 1, 2, undefined]);
console.log(result4);  // [1, 2]