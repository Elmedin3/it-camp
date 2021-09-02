function infected(s){

    arg1 = s.split('X')
    zarazeni = 0
    svi = 0
    
    arg1.forEach(function(el) {
        
        if(el.includes(1)){
            parseInt(el)
            zarazeni += el.length;
        }
        svi += el.length
    })
    ukupno = 100*zarazeni/svi
    if(isNaN(ukupno)){
        ukupno = 0
    }
    return ukupno
}
console.log(infected("X100XXXXX"))