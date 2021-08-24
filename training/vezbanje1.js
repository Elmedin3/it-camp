// while(true){
//     operacija = prompt("unesite operaciju");
//     if(operacija === "+"){
//         b1 = parseInt(prompt("unesite prvi broj"));
//         b2 = parseInt(prompt("unesite drugi broj"));
//         alert(`${b1} + ${b2} = ${b1+b2}`)
//         break;
//     }
// }

// var res = ""
// var zvezda = "*"
// for(i=0;i<5;i++){
//     for(j=5; j>i;j--){
//     // kolicina+=zvezda;
//     // console.log(kolicina);
//     res+=zvezda
//     }
//     res = res+"\n";
// }
// console.log(res,i,j);


// broj = 20;

// if(broj%5===0 && broj%3===0){
//     console.log("fizzbuzz");
// }else if(broj%5===0){
//     console.log("fizz");
// }else if(broj%3===0){
//     console.log("buzz");
// }else{
//     console.log("error");
// }


// var broj = 7;

// for(i=0;i<7;i++){
//     do{
//         console.log("7x je");
//         break
//     }while(broj);
// }


// var niz = [];
// sab = 0;

// for(i=0; i<10; i++){
//     nizz = parseInt(prompt("unesite clan"));
//     if(typeof nizz === 'number'){
//         niz.push(nizz);
//         sab = sab + nizz;
//     }else{
//         alert('niste uneli broj')
//     }
// }
// console.log(sab)


// document.getElementById('nizzz').innerHTML = niz;
// document.getElementById('sabiranje').innerHTML = sab;

// var niz = [43,56,23,89,88,90,99,652];
// console.log(niz);
// niz.sort(function(a,b){
///     return a-b
// })
// console.log(niz);


// console.log(Math.min(...niz));
// console.log(Math.min(...niz));



// var niz = [];

// p = -5
// z = 7
// for (let i = p;  i <= z ; i++) {
//     niz.push(i);
// }
// console.log(niz);

// var prviNiz = ["matematika","informatika"];
// var drugiNiz = ["informatiqka"];


// for(i=0; i<prviNiz.length; i++){
//     if(drugiNiz.indexOf(prviNiz[i]) === -1){
//         niz = true;
//     }else{
//         niz = false;
//     }
// }
// console.log(niz);

// const niz1 = ["bag","mag"];
// const niz2 = ["rar","bag","mag","rag"];

// let niz = true;

// for (let i = 0; i < niz1.length; i++){
//     // if (niz2.indexOf(niz1[i]) === -1) {
//     if (!niz2.includes(niz1[i])) {
//         niz = false;
//         break;
//     }
// }

// console.log(niz);

// function najRec(rec){
//     let nizReci = rec.split(" ") 
//     let naj = nizReci[0];

//     for(let i=0; i < nizReci.length; i++){
//         if(naj.length < nizReci[i].length){
//             naj=nizReci[i];
//         }
//     }
//     return naj;
// }
// console.log(najRec("ja kasmkasm askda"));


// let textt = "sadasnjost" 

// samoglasnici(textt)

// function samoglasnici(sam){
//     let slova = sam.split("");
//     let a = 0;
//     let e = 0;
//     let i = 0;
//     let o = 0;
//     let u = 0;

//     for(j=0; j<slova.length; j++){
//         // if(slova[i]==="a" || slova[i]==="e" || slova[i]==="i" || slova[i]==="o" || slova[i]==="u"){
//         //     samogla = samogla + 1;
//         // }
//         switch(slova[j]){
//             case "a":
//                 a++;
//                 break;
//             case "e":
//                 e++;
//                 break;
//             case "i":
//                 i++;
//                 break;
//             case "o":
//                 o++;
//                 break;
//             case "u":
//                 u++;
//                 break;      
//         }
//     }
//     // return samogla;
//     console.log(`Ukupno samoglasnika ima: a${a}e${e}i${i}o${o}u${u}`);
// }


// function nizNula(nula){

//     for(i=0; i<nula.length; i++){
//         for(j=0; j<nula.length; j++){
//         if(nula[i] === 0){
//             nula.splice(i,1);
//             nula.push(0);
//         }
//         }
//     }
//     return nula;
// }
// console.log(nizNula(["a",5,9,0,5,7,0,0,0,0,8,0,0,0,0,9,0,0,0,0]))


// function nizbrojeva(arg1){
//     sign = ["(",")"," ","-"];
//     signIndx = [0,4,5,9];

//     for(i=0;i<sign.length;i++){
//         arg1.splice(signIndx[i],0,sign[i])
//     }
//     return arg1.join("")
// }
// console.log(nizbrojeva([1,2,3,4,5,6,7,8,9,0]))


// let brojevi = [2,4,5,6,8]

// parnepar(brojevi)

// function parnepar(integer){
//     par = []
//     nepar = []
//     for(i=0; i<integer.length; i++){
//         if(integer[i] % 2 === 0){
//             par.push(integer[i])
//     }   if(integer[i] % 2 !== 0){
//             nepar.push(integer[i])
//     }
// }
// }
// console.log(`Parni:${par} a Neparni:${nepar}`)



// function maskify(arg1){

//     let niz = arg1.split("")
//     console.log(niz)

//     for(i=0; i < niz.length-4; i++){
//         niz.splice(i,1,"#")
        
//     }
//     console.log(niz)
//     return niz.join(" ")
// }
// console.log(maskify("asde"))

// let broj = "523"

// razdvajanje(broj)

// function razdvajanje(arg1){
//     let niz = arg1.split("")
//     let res = ""

//     for(i=0; i < niz.length; i++){
//         if(niz[i] !== '0' ){
//             nula = "0".repeat(niz.length - 1 - i)
//             res += niz[i] + nula + " + "
//         }
//     }
//     return res.slice(0,res.length -3)
// }
// console.log(razdvajanje("564"))

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
console.log(dodavanje(["faris","Amel","eki"]))
