let brojevi = [2,4,5,6,8]

parnepar(brojevi)

function parnepar(integer){
    par = []
    nepar = []
    for(i=0; i<integer.length; i++){
        if(integer[i] % 2 === 0){
            par.push(integer[i])
    }   if(integer[i] % 2 !== 0){
            nepar.push(integer[i])
    }
}
}
console.log(`Parni:${par} a Neparni:${nepar}`)