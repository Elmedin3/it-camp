function uniqueInOrder(x){

    niz = []
   if(Array.isArray(x)){
       for(i=0; i<x.length; i++) {
           if(x[i] !== x[i+1]){
               niz.push(x[i])
           }
       }
   }
   else{
   arg1 = x.split('')
   for(i=0; i<arg1.length; i++) {
       if(arg1[i] !== arg1[i+1]){
           niz.push(arg1[i])
       }
   }
}
   return niz
}
console.log(uniqueInOrder('aaaaaaabbbbdddddeee'))