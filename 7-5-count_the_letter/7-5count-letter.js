function countletters(arr){
    let strarr=[],cntarr=[],j=0;
    arr=arr.join(' ').split(' ').join('').toLowerCase();
    cntarr=[0];
    for(let i=0;i<arr.length;i++){
        if(strarr.indexOf(arr[i])===-1){
            strarr[j++]=arr[i];
            cntarr[strarr.indexOf(arr[i])]=1;
        }
        else if(strarr.indexOf(arr[i]!==-1)){
            cntarr[strarr.indexOf(arr[i])]++;
        }
    } 
    
    const obj= Object.assign.apply({}, strarr.map((key,value) => ({
        [key]: cntarr[value]
    })));
    
    return obj;
}


let array = ["Hello", "Good Day", "Your Welcome", "hotdog",
"hamburgers"];

console.log(countletters(array)); 




