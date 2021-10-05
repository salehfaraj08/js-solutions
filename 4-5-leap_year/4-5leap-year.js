function leapyear(year){
    if((year%4===0&&year%100!=0)||(year%4===0&&year%100===0&&year%400===0)){
        console.log("It is indeed aleap year");
    }
    else{
        console.log("This is not a leap year.");
    }
}

leapyear(2024);