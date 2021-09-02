function maskify(arg1){

    let niz = arg1.split("")
    console.log(niz)

    for(i=0; i < niz.length-4; i++){
        niz.splice(i,1,"#")
        
    }
    console.log(niz)
    return niz.join(" ")
}
console.log(maskify("asde"))