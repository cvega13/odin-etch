let sideLength = 32;
let maxGridSize = Math.min(window.innerHeight, window.innerWidth) - (2*sideLength);


// Creates blank grid of size (sideLength * sideLength)
function createGrid() {
    const container = document.querySelector("#container");
    let cellLength = maxGridSize / sideLength;

    for (let i = 0; i < sideLength; i++) {
        let row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < sideLength; j++) {
            // Initialize cell attributes
            let cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.width = (cellLength - 2) + "px";
            cell.style.height = (cellLength - 2) + "px";
            row.appendChild(cell);
        }
        container.appendChild(row);
    }

    // Adds hover event listener for each cell
    const cells = document.querySelectorAll(".cell");
    cells.forEach(function(cell) {
        cell.addEventListener("mouseover", (event) => {
            cell.classList.add("hovered");
        });
        cell.addEventListener("mouseout", (event) => {
            cell.classList.add("hovered");
        });
    });
}

// Changes number of cells on each side of the grid
const changeButton = document.querySelector("button");
changeButton.addEventListener("click", (event) => {
    let newLength = prompt("Enter the number of squares per side of the new grid", 32);

    if ((0 < newLength) && (newLength <= 100)) {
        const container = document.querySelector("#container");
    
        while (container.firstChild) {
            container.removeChild(container.lastChild);
        }
    
        sideLength = newLength;
        createGrid();
    }
});


createGrid();
