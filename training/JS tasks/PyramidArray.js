function pyramid(n){

    niz = []
    nizNizova = []
    for(i=0; i<n; i++){

        nizNizova.push(1)
        p = [...nizNizova]
        niz.push(p)
        
    }
    return niz
}
console.log(pyramid())