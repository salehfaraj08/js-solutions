function findSmallest(a, b, c){

    if (b > c&&a > c){
        return c;
    }
    else if (a  > b&&c > b) {
        return b;
    }
    else{
        return a;
    }
}
    console.log(findSmallest(2,80, 66))

/*     What is wrong with this code?
1. First find the line that contains the problem. Write it down.
    findSmalest(52,66, 2);
2. Which debug method did you use to find the bug?
breakpoint
3. Explain the bug in your own words.
the letter "L" was missing and thers is a bug on the algorithm,
4. Fix the code and submit it all. */

