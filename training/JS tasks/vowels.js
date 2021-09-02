let textt = "sadasnjost" 

samoglasnici(textt)

function samoglasnici(sam){
    let slova = sam.split("");
    let a = 0;
    let e = 0;
    let i = 0;
    let o = 0;
    let u = 0;

    for(j=0; j<slova.length; j++){
        // if(slova[i]==="a" || slova[i]==="e" || slova[i]==="i" || slova[i]==="o" || slova[i]==="u"){
        //     samogla = samogla + 1;
        // }
        switch(slova[j]){
            case "a":
                a++;
                break;
            case "e":
                e++;
                break;
            case "i":
                i++;
                break;
            case "o":
                o++;
                break;
            case "u":
                u++;
                break;      
        }
    }
    console.log(`Ukupno samoglasnika ima: a${a}e${e}i${i}o${o}u${u}`);
}