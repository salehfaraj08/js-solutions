function countOccurrences (str, char){
    let counter = 0 ;
    for ( let i = 0 ; i < str .length; i ++ ){
        if ( str.charAt( i ) === char ){
            counter++
        }
    } 
    return counter ;
}
countOccurrences ( "ini mini miny moe" , "n" );

/* What is wrong with this code?
1. First find the line that contains the problem. Write it
down.
counter++
2. Which debug method did you use to find the bug?
breakpoint
3. Explain the bug in your own words.
no increment for the counter
4. Fix the code and submit it all. */