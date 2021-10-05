function getSum(arr1, arr2){
    let sum = 0;
    for (let i=0; i < arr1.length; i++){
        sum += arr1[i];
    }
    for (let i=0; i < arr2.length; i++){
        sum += arr2[i];
    }
    return sum
}
getSum([1,2,3],[5,66,23]);

/* 
What is wrong with this code?
1. First find the line that contains the problem. Write it down.
getSum([1,2,3][5,66,23]);
const sum = 0;
2. Which debug method did you use to find the bug?
breakpoint
3. Explain the bug in your own words.
the bug was in the line of the calling for the function there was the comma missing(,)between
,and the assignment in the function for a const variable
4. Fix the code and submit it all. */