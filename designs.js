// Select color input

//
// Select size input

const sizePicker = document.getElementById('sizePicker');
sizePicker.addEventListener('submit', makeGrid);

// When size is submitted by the user, call makeGrid()
// creates the grid that is configured by the values of the form

function makeGrid(event) {
  let inputs = sizePicker.elements;
  let gridHeight = inputs[0].value;
  let gridWidth = inputs[1].value;
  const pixelCanvas = document.getElementById("pixelCanvas");
  pixelCanvas.innerText=""; // empty table

// Your code goes here!
//
  console.log(gridWidth);
  console.log(gridHeight);

  for (let h = 0; h < gridHeight; ++h) {

      const row = pixelCanvas.insertRow(-1);
      for (let w=0; w<gridWidth; ++w) {
          const cell = row.insertCell(-1); //insert new cell at the last position
          cell.onclick = changeColor;
      }
  }
  event.preventDefault();  // prevents reload of the page
}


// changes color of the background of cell that is clicked
// with the color Picker value
//
function changeColor() {
  const color = document.getElementById("colorPicker").value;
  this.style.background = color;
}
