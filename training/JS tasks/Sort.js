var niz = [43,56,23,89,88,90,99,652];
niz.sort(function(a,b){
     return a-b
})
console.log(niz);


console.log(Math.min(...niz));
console.log(Math.max(...niz));