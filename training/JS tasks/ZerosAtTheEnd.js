function nizNula(nula){

    for(i=0; i<nula.length; i++){
        for(j=0; j<nula.length; j++){
        if(nula[i] === 0){
            nula.splice(i,1);
            nula.push(0);
        }
        }
    }
    return nula;
}
console.log(nizNula(["a",5,9,0,5,7,0,0,0,0,8,0,0,0,0,9,0,0,0,0]))