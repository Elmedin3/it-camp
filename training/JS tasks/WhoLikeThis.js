function dodavanje(arg1){

    for(i=0; i<arg1.length; i++){
        if(arg1.length === 0 ){
            return "no one likes this"
        }else if(arg1.length < 2){
            return `${arg[0]} like this`
        }else if(arg1.length < 3){
            return `${arg1[0]} and ${arg1[1]} like this`
        }else{
            return `${arg1[0]}, ${arg1[1]} and ${arg1.length-2} more like this`
        }
    }
}
console.log(dodavanje(["Faris","Amel","Eki"]))