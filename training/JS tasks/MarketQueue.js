function queueTime(arg1, kase){

minuti = 0

    for(i=0;i<arg1.length;i++){
        if(arg1.length<=kase){
            minuti = Math.max(...arg1)
        }
        else if(kase === 1){
            minuti = minuti + arg1[i]
        }
        else{
            nizKasa = arg1.splice(0,kase);
            for(j=0;j<arg1.length;j++){
                let nizPlus = Math.min(...nizKasa) + arg1[j]
                nizKasa.splice(nizKasa.indexOf(Math.min(...nizKasa)),1,nizPlus)
                minuti = Math.max(...nizKasa)
            }
            break;
            }
        }
        return minuti
    }
    console.log(queueTime([8,6,2,11,5,8,9,6,4,2,3], 5))