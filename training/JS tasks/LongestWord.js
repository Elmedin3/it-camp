function najRec(rec){
    let nizReci = rec.split(" ") 
    let naj = nizReci[0];

    for(let i=0; i < nizReci.length; i++){
        if(naj.length < nizReci[i].length){
            naj=nizReci[i];
        }
    }
    return naj;
}
console.log(najRec("ja kasmkasm askda"));