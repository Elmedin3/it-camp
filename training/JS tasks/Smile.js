function smile(arg1){
    nSmile = 0;
    randomSmile = [":)",":~)",":-)",":~D",":D",":-D",";)",";~)",";-)",";~D",";D",";-D"];

    for(i=0; i<arg1.length; i++){
        for(j=0; j<randomSmile.length; j++){
            if(arg1[i]===randomSmile[j]){
                nSmile = nSmile + 1;
            }
        }
    }
    return `Nasmejanih: ${nSmile} `
}
console.log(smile([":P",":D",":~O",":~)",":-D"]))