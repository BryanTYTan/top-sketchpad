var container_div = document.querySelector('.drawing-box');

// Create the drawing pad
for (let i = 0; i < 16; i++) {
    var new_div = document.createElement('div');
    new_div.classList.add('drawing-pad');
    container_div.appendChild(new_div);
}

var boxes = document.querySelectorAll('.drawing-pad');

// Add the listener for each drawing pad to be "drawn" when hovered over
for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener('mouseenter', mouseEnter);
}

// Add listener on button to clean drawing pad
document.querySelector('#clear-drawing-pad').addEventListener('click', clearDrawingPad);

// Fuctions
function mouseEnter(event) {
    var hovered_div = event.target;
    event.target.classList.add('drawn');
}

function clearDrawingPad(event) {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].classList.remove('drawn');
    }
}