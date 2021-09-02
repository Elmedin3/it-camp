const un = document.querySelector("#polje11"); 
const ps = document.querySelector("#polje22"); 
const fr = document.querySelector(".forma"); 

console.log(fr);

fr.onsubmit = function(e){
    e.preventDefault();
    if(un.value === "Elmedin" && ps.value === "33334444"){
        alert("uspesno ste se prijavili");
    }
    else{
        alert("greska");
    }
}