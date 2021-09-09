function high(x){

    arg1 = x.split(" ")
    slova = " abcdefghijklmnopqrstuvwxyz"
    brojac = []
    
    for(i=0; i<arg1.length; i++){
        brojac.push(0)
        for(j=0; j<arg1[i].length; j++){
            for(k=1; k<slova.length; k++){
                if(arg1[i][j]===slova[k]){
                    brojac[i] += k
                }
            }
        }
    }
        indx = brojac.indexOf(Math.max(...brojac))
        return arg1[indx]
    }
    console.log(high('mana i need a taxi up to ubud'))