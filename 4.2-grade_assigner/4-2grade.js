function grade(numberScore){
    if(numberScore>=0&&numberScore<65){
        return "F";
    }
    else if(numberScore>=65&&numberScore<70){
        return "D";
    }
    else if(numberScore>=70&&numberScore<80){
        return "C";
    }
    else if(numberScore>=80&&numberScore<90){
        return "B";
    }
    else if(numberScore>=90&&numberScore<=100){
        return "A";
    }
    else if(numberScore>100||numberScore<0){
        return "fault score";
    }
}

console.log("your score rate is:",grade(100));