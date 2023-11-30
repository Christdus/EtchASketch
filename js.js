
const grid = document.querySelector('#grid');
grid.addEventListener("click", function(){
        console.log(grid.value)
    
        gridSize = parseInt(grid.value);
        
        (!isNaN(gridSize) && gridSize >= 16 && gridSize<=100) 
            createBoard(gridSize);
            console.log(gridSize);
            document.getElementById("Gridsize").innerHTML = "Gridsize: " + gridSize;
            return gridSize;

        }
    );
function createBoard(gridSize){
    let numDivs = gridSize * gridSize;
    console.log(gridSize);
    console.log(numDivs);
    let board = document.querySelector("#board");
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }
    

    board.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;
    board.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    
    for(let i =0; i < numDivs; i++){
        let div = document.createElement("div");
        div.style.border = "1px solid rgba(0, 0, 0, 0.25)";
        board.appendChild(div);
        div.addEventListener('mouseover', (handleMouseOver));}
}
const color = document.querySelector('#myColor');
function handleMouseOver(event){
    event.target.style.backgroundColor = (color.value);
    console.log(color.value)
    console.log(event)
    // event.target.removeEventListener("click", handleMouseClick);   
    } 


const resetBoard = document.querySelector('#reset');
resetBoard.addEventListener('click', function(){
        let board = document.querySelector("#board");
        while (board.firstChild) {
            board.removeChild(board.firstChild);
        }
        createBoard(gridSize);      
    });


