// br1 = 4;
// br2 = 5;

// operacija = '+';

// switch (operacija) {
//     case '-':
//         console.log(br1 - br2);
//         break;

//     case '+':
//         console.log(br1 + br2);
//         break;

//     case '*':
//         console.log(br1 * br2);
//         break;

//     case '/':
//         console.log(br1 / br2);
//         break;

//     default:
//         console.log('nece');
// }



// godina = "2004";

// mesec = "5";

// switch(mesec){
//     case '1':
//     case '3':
//     case '5':
//     case '7':
//     case '8':
//     case '10':
//     case '12':
//         console.log("31");
//         break;
    
//     case '4':
//     case '6':
//     case '9':
//     case '11':
//         console.log("30");
//         break;

//     case '2':
//         if(godina % 4 === 0){
//             console.log("29");
//         }else{
//             console.log("28");
//         }
//         break;

//     default:
//         console.log('taj mesec ne postoji');
// }


// var n=7

// if(n===5){
//     console.log("5 niste prosli");
// }
// else if(n===6){
//     console.log("6 sest");
// }
// else if(n===7){
//     console.log("7 sedam");
// }
// else if(n===8){
//     console.log("8 osam");
// }
// else if(n===9){
//     console.log("9 devet");
// }
// else if(n===10){
//     console.log("10 deset, cestitamo");
// }
// else{
//     console.log("ocena ne postoji");
// }


// var n=97

// if(n < 54){
//     console.log("5 niste prosli");
// }
// else if(n < 65){
//     console.log("6 sest");
// }
// else if(n < 75){
//     console.log("7 sedam");
// }
// else if(n < 85){
//     console.log("8 osam");
// }
// else if(n < 95){
//     console.log("9 devet");
// }
// else if(n >= 95){
//     console.log("10 deset, cestitamo");
// }
// else{
//     console.log("ocena ne postoji");
// }

// var n = 'b'

// switch(n){
//     case 'a':
//         console.log('5');
//         break;
//     case 'b':
//         console.log('4');
//         break;
//     case 'c':
//         console.log('3');
//         break;
//     case 'd':
//         console.log('2');
//         break;
//     case 'e':
//         console.log('1');
//         break;
//     default:
//         console.log('niste prosli');
        

    
// }



// for(let i=6; i > 0; i--){
//     console.log(i);
// }


// for(let i=1; i<11; i++){
//     if(i===7){
//         continue
//     }
//     console.log(i)
// }


// var suma=0

// for(let i=0; i<=20; i+=2){
//     suma+=i;
//     console.log(i,suma);
// }


// for(let i=0; i<6; i++){
//     if(i<3){
//         console.log('paython')
//     }else{
//     console.log('je super')
//     }
// }


// var br = 13

// for(i=1; i<=br; i++){
//     if(br%i===0){
//         console.log(i)
//     }
// }



var brUcenika = 20;
var redBr = 6;

for(i=1; i<=brUcenika; i+=redBr){
    console.log(i);
}
