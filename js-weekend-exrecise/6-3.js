const organizeStrings = ((str1,str2) => {
    str1 = str1.split('')
    str2 = str2.split('')
    const final = Array.from(new Set(str1.concat(str2).sort()))
    return final.join('')
})

console.log(organizeStrings('abcdefghijklmnopqrstuvwxyz','abcdefghijklmnopqrstuvwxyz'))