/* const countDup = (arr => {
    let strarr=[],cntarr=[],j=0;
    arr=arr.toLowerCase().split('');
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
    let final = []
    for(let i=0 ; i<strarr.length ;i++){
        if(cntarr[i]>1){
            final += strarr[i] + ' occurs: ' + cntarr[i] +' times '
        }
    }
    if(final.length === 0){
        final ='no characters repeats more than once'
    }
    return final;
})

console.log(countDup('ABBA')) */





const countDup = (arr => {
    arr=arr.toLowerCase().split('');
    obj = {}
    arr.forEach(element => {
        if(obj.hasOwnProperty(element)){
            obj[element]+=1
        }
        else{
            obj[element]=1
        }
    });
    let final ={}
    arr.filter(element => {
        if(obj.hasOwnProperty(element)){
            if(obj[element]>1){
                final[element] = 'occurs ' + obj[element] + ' times' 
            }
        }
    });

    
    return final;
})

console.log(countDup('Indivisibilities'))