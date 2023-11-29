
const grid = document.querySelector('#grid');
grid.addEventListener("click", function(){
    console.log ("hi");
    let gridSize = prompt("Enter your grid size(16/100): Click ok!");
    
    if(gridSize !== null) {
        gridSize = parseInt(gridSize);
        
        if(!isNaN(gridSize) && gridSize >= 16 && gridSize<=100) {
            createBoard(gridSize);
            return gridSize;
        }else{
            alert("Invalid input. Please enter a number between 16 and 100! Click ok!");
            console.log(gridSize);
            return gridSize;   
        }
    }
});

function createBoard(gridSize){
    let numDivs = gridSize * gridSize;
    console.log(gridSize);
    console.log(numDivs);
    let board = document.querySelector("#board");
    

    board.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    
    for(let i =0; i < numDivs; i++){
        let div = document.createElement("div");
        div.style.border = "1px solid rgba(0, 0, 0, 0.25)";
        board.appendChild(div);

        // div.addEventListener("mouseover", handleMouseOver)   
        }
    }

    const black = document.querySelector('#black');
    black.addEventListener("click",function(){
        console.log("black");
        });
    const color = document.querySelector('#color');
    color.addEventListener("click",function(){
        console.log("color");
    });
function handleMouseOver




