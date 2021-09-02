function nizbrojeva(arg1){
    sign = ["(",")"," ","-"];
    signIndx = [0,4,5,9];

    for(i=0;i<sign.length;i++){
        arg1.splice(signIndx[i],0,sign[i])
    }
    return arg1.join("")
}
console.log(nizbrojeva([1,2,3,4,5,6,7,8,9,0]))