function solution(arg1,arg2){
    let spl = arg1.split("\n")

    for(i=0;i<spl.length;i++){
        if(!spl[i].includes(arg2[0]) && !spl[i].includes(arg2[1])){
            spl[i] = spl[i]
        }
        for(j=0;j<spl[i].length;j++){
            if(spl[i][j] === arg2[0] || spl[i][j] === arg2[1]){
                spl[i] = spl[i].split("")
                spl[i] = spl[i].slice(0,j-1)
                spl[i] = spl[i].join("")
                break
            }
        }
    }
    return spl.join('\n')
}
console.log(solution("apples, plums # and bananas\npears\noranges !applesauce",["#","!"]))