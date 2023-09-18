/* script.js */

const GRID_SIZE = 16;

function createGrid() {
    const gridContainer = document.querySelector(".grid-container");

    //let num = -1;
    for (let i = 0; i < GRID_SIZE; i++) {
        for (let j = 0; j < GRID_SIZE; j++) {

            const div = document.createElement("div");
            div.setAttribute("class", "grid-div");

            div.style.backgroundColor = "yellow";
            div.style.flex = "1";
            div.style.flexBasis = "6.1%";
            div.style.height = "5.625vh";
            div.style.display = "flex";
            div.style.flexWrap = "wrap";
            div.style.justifyContent = "center";
            div.style.alignItems = "center";

            div.style.boxSizing = "border-box";
            div.style.border = "solid black 2px";
            gridContainer.appendChild(div);
            
            /*
            const number = document.createElement("h1");
            number.style.color = "black";
            number.style.fontSize = "18px";
            number.textContent = num.toString();
            div.appendChild(number);
            */

            div.addEventListener("mouseover", hoverEffect); 
        }
    }
}

function hoverEffect(e) {
    console.log(e.target);
    e.target.style.backgroundColor = "black";
}

createGrid();
