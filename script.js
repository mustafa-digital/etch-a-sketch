/* script.js */


function createGrid(gridNum) {
    const gridContainer = document.querySelector(".grid-container");

    //let num = -1;
    for (let i = 0; i < gridNum; i++) {
        for (let j = 0; j < gridNum; j++) {

            const div = document.createElement("div");
            div.setAttribute("class", "grid-div");

            div.style.backgroundColor = "yellow";
            div.style.flex = "1";
            div.style.flexBasis = `${100/gridNum}%`;
            div.style.height = `${100/gridNum}vh`;
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
    e.target.style.backgroundColor = "black";
    e.target.style.border = "solid yellow 2px";
}

function clearGrid() {
    const gridContainer = document.querySelector(".grid-container");
    gridContainer.textContent = "";
}

function createNewGrid() {
    
    const gridNum = document.getElementById("grid-num").value;
   
    if (gridNum){
        clearGrid();
        createGrid(gridNum);
    }
}

const btn = document.querySelector(".create-new-button");
btn.addEventListener("click", createNewGrid);



createGrid(16);
