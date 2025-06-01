document.querySelector('.create-pad').addEventListener('click', initializePad);

function initializePad(event) {
    var modal = document.querySelector('#popup_msg');
    var close_button = document.querySelector('.close-button');


    close_button.addEventListener('click', function () {
        modal.style.display = "none";
    })

    modal.style.display = "flex";

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}


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



// Fuctions
function mouseEnter(event) {
    var hovered_div = event.target;
    event.target.classList.add('drawn');
}


// Restore drawing pad to empty state
document.querySelector('#clear-drawing-pad').addEventListener('click', clearDrawingPad);

function clearDrawingPad(event) {
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].classList.remove('drawn');
    }
}