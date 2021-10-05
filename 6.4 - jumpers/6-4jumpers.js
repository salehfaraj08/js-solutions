function avgJumper(array){
    let avgforjumper = [],countjump=0,avg=0,j=0,divider=0;
    for(let i=0;i<array.length;i++){
        if(array[i]>=1&&countjump<3){
            avg+=array[i];
            divider++;
        }
        if(countjump===2&&avg>0){
            countjump=0;
            avg/=divider;
            avgforjumper[j++]=avg;
            avg=0;
            divider=0;
        }
        else if(countjump===2&&avg===0){
            countjump=0;
            avgforjumper[j++]=avg;
            avg=0;
            divider=0;
        }
        else{
            countjump++;
        }
    }
    return avgforjumper;
}

function bestAvgJump(array){
    return Math.max(...array);
}

function bestJump(array){
    return Math.max(...array);
}

let jumpArray=[5,5,9,7,-1,5];
let avgjumper=avgJumper(jumpArray);
console.log(avgjumper);
console.log("the best avg jump is;",bestAvgJump(avgjumper));
console.log("the best jump is:",bestJump(jumpArray));


jumpArray=[1,5,9,-1,-1,-1,10,5,-1];
avgjumper=avgJumper(jumpArray);
console.log(avgjumper);
console.log("the best avg jump is;",bestAvgJump(avgjumper));
console.log("the best jump is:",bestJump(jumpArray));