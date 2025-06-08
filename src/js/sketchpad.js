document.querySelector('.create-pad').addEventListener('click', initializePad);

function initializePad(event) {
    var modal = document.querySelector('#popup_msg');
    var close_button = document.querySelector('.close-button');
    var submit_button = document.querySelector('.generate-pad');

    close_button.addEventListener('click', function () {
        modal.style.display = "none";
    })

    submit_button.addEventListener('click', generatePad);

    modal.style.display = "flex";

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

function generatePad(event) {
    var input = document.querySelector('#pad_size');
    var value = input.value;

    if (value < 1 || value >100) {
        input.value = "";
        alert('Please enter a valid number from 1 - 100');
        return;
    }

    var container_div = document.querySelector('.drawing-box');
    container_div.innerHTML = "";

    var total_boxes = value * value;
    var width = 100 / value;

    // Create the drawing pad
    for (let i = 0; i < total_boxes; i++) {
        var new_div = document.createElement('div');
        new_div.classList.add('drawing-pad');
        new_div.style.width = `${width}%`;
        new_div.style.padding = `${width}px`;
        container_div.appendChild(new_div);
    }

    var boxes = document.querySelectorAll('.drawing-pad');

    // Add the listener for each drawing pad to be "drawn" when hovered over
    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener('mouseenter', mouseEnter);
    }


    document.querySelector('#popup_msg').style.display = "none";
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