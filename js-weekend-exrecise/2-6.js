const centuryFromYear = (year =>{
    let cnt=0
    while(year>0){
        cnt++
        year-=100
    }
    return 'century: '+cnt
})

console.log(centuryFromYear(2101))