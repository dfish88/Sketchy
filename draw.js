const ui = {
    canvas : document.querySelector('.canvas'),
    clear : document.querySelector('.clear'),
};

function clearCanvas(){
    ui.allCells.forEach((element) => {element.style['background-color'] = 'white'});
}

ui.canvas.style.display = 'grid';
ui.canvas.style['grid-template-columns'] = 'repeat(128, auto)';

for(let i = 0; i< 128; i++){
    for(let j = 0; j < 128; j++){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', (e) => { e.target.style['background-color'] = 'black';});
        ui.canvas.appendChild(cell);
    }
}

ui.allCells = document.querySelectorAll('.cell');
ui.clear.addEventListener('click', clearCanvas);