const nb_year = ((p0, percent, aug, p) => {
    let year=0
    percent = percent * 0.01
    while(p0<p){
        p0 = parseInt( p0 + (p0*percent) + aug )
        year++
    }
    return year
})

console.log(nb_year(1500000, 2.5, 10000, 2000000))
