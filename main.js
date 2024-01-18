const box = document.getElementById("box");
const box1 = document.getElementById("main");
const bdy = document.getElementById("bdy");
let pndt = document.getElementById("pndt");

pndt.addEventListener('click', changeColor)

function changeColor() {
if (box.style.backgroundColor === "blue"){
    (box.style.backgroundColor = "green")
    } else {
        (box.style.backgroundColor = "blue")
    }

    if (bdy.style.backgroundColor === "darkgray"){
        (bdy.style.backgroundColor = "lightgray")
        } else {
            (bdy.style.backgroundColor = "darkgray")
        }
    
        if (box1.style.backgroundColor === "white"){
        (box1.style.backgroundColor = "black")
        } else {
            (box1.style.backgroundColor = "white")
        }
};

