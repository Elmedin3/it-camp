function razdvajanje(arg1){
    let niz = arg1.split("")
    let res = ""

    for(i=0; i < niz.length; i++){
        if(niz[i] !== '0' ){
            nula = "0".repeat(niz.length - 1 - i)
            res += niz[i] + nula + " + "
        }
    }
    return res.slice(0,res.length -3)
}
console.log(razdvajanje("564"))