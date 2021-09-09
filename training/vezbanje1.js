import fetch from "node-fetch";
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


//  let str = 'ja radim sam'
//  arg = str.split(' ')
//  str = arg.join('')
//  console.log(str)


// function element(arg){
//     res = []
//     res = arg.filter((el) => Boolean(el));
//     return res
// }console.log(element([NaN,0,15,"",2]))

// const person = {
//     firstName : "John",
//     lastName  : "Doe",
//     age     : 50,
//     eyeColor  : "blue",
//     // fullname: function(){
//     //    return person.firstName + " " + person.lastName
//     // }
//   }
//   console.log(Object.entries(person))
//   console.log(JSON.stringify(person))
//   txt = " "
//   for(let x in person){
//       txt += person[x] + " "
//   }
//   console.log(txt)


// var library = [
//     {
//         author: "Bill Gates",
//         title: 'The Road Ahead',
//         readingStatus: true
//     },
//     {
//         author: 'Steve Jobs',
//         title: 'Walter Isaacson',
//         readingStatus: true
//     },
//     {
//         author: 'Suzanne Collins',
//         title:  'Mockingjay: The Final Book of The Hunger Games', 
//         readingStatus: false
//     }
// ]
// library.forEach(el => {
//     console.log(el.readingStatus)
// });

// function url(arg){

//     rpl1 = arg.replace("/","")
//     rpl2 = rpl1.replace(":","")
//     spl = rpl2.split("/")
//     spl1 = spl[1].split("").slice(4,).join("")
//     console.log(spl)

//     obj = {
//         Protocol: spl[0],
//         Domain: spl1,
//         Ost1: spl[2],
//         Ost2: spl[3]
//     }
//     return obj
// }
// console.log(url("https://www.w3resource.com/javascript-exercises/javascript-object-exercises.php"))


// obj = {
//     first: "f1",
//     second: "s2",
//     third: "t3"
// }
// obj1 = {}
// reversed = []
// Object.entries(obj).forEach(el => {
//     reversed.push(el.reverse());
// });

// for (let i = 0; i < reversed.length; i++) {
//     for(let j = 0; j < reversed[i].length; j++){
//         Reflect.set(obj1,reversed[i][j],reversed[i][j+1])
//             break;
//     }
// }

// console.log(obj1)

// function incl(x){
//     obj = {
//         name: "eki",
//         age: 26,
//         work: "school"
//     }
//     if(Object.keys(obj).includes(x)){
//         return true
//     }else{
//         return false
//     }
// }console.log(incl("name"))

fetchingData = fetch()