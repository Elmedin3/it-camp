// while(true){
//     operacija = prompt("unesite operaciju");
//     if(operacija === "+"){
//         b1 = parseInt(prompt("unesite prvi broj"));
//         b2 = parseInt(prompt("unesite drugi broj"));
//         alert(`${b1} + ${b2} = ${b1+b2}`)
//         break;
//     }
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

// let kod = ["BRTH 2","AERD 33","ASCV 14","CERT 124","EKTO 9","CFGB 47"]

// sabiranje(kod)

// function sabiranje(arg1){
//     slova = ["A","B","C","E"]
//     kodBr = []
//     for(i=0;i<arg1.length;i++){
//         kodBr.push(arg1[i].split(" "))
//         kodBr[i][1] = parseInt(kodBr[i][1])
//     }
//     console.log(kodBr) 
// }

// function pointInCircle(x,y){
//     if(Math.sign(x)===-1){
//         x *= -1
//     }
//     if(Math.sign(y)===-1){
//         y *= -1
//     }
//     k = x + y
//     if(k<=1.4 && x<1 && y<1){
//         return true
//     }else{
//         return false
//     }
// }
// console.log(pointInCircle(0.7,-0.7))


 
