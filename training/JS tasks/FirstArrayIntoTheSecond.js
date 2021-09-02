const niz1 = ["bag","mag"];
const niz2 = ["rar","bag","mag","rag"];

let niz = true;

for (let i = 0; i < niz1.length; i++){
    // if (niz2.indexOf(niz1[i]) === -1) {
    if (!niz2.includes(niz1[i])) {
        niz = false;
        break;
    }
}

console.log(niz);