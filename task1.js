function largestofFour(arr) 
{
    const results = [];
    for (let i = 0; i < arr.length; i++) 
    {
       let largest = arr[i][0];
       for (let j = 0; j < arr[i].length; j++)
        {
        if (arr[i][j] > largest) 
        {
            largest = arr[i][j];
        }
        }
        results[i] = largest;
    }
    return results;
}
document.write(largestofFour([[4,9,3,1], [13, 35, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));