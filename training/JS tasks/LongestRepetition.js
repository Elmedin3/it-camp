function longestRepetition(s){

    arg1 = s.split("")
    br = 1
    niz = []
    najduza = ["",0]
    
    for(i=0; i<arg1.length; i++){
        if(arg1[i]===arg1[i+1]){
            br++
        }else{
            niz.push(arg1[i])
            niz.push(br)
            br = 1
        }
    }
    for(j=1; j<niz.length; j+=2){
        if(najduza[1] < niz[j]){
            najduza.splice(0,1,niz[j-1])
            najduza.splice(1,1,niz[j])
        }
    }
    return najduza
}
console.log(longestRepetition("aaaabbvvvvvvvv"))