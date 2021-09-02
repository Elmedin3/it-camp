function generatePairs(m, n){
    niz = []
    niz1 = [0,0]

    for (let i = m; i <= n; i++) {
        for(let j = i; j <= n; j++){
            niz1.splice(0,2,i,j)
            niz2 = [...niz1]
            niz.push(niz2)
        }
    }
    return niz
}
console.log(generatePairs(2,4))