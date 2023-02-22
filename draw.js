const ui = {
    canvas : document.querySelector('.canvas'),
    clearButton : document.querySelector('.clear'),
    sizeSelector : document.querySelector('.size-selector'),
    colorSelector : document.querySelector('.color-selector')
};

function removeCells(){
    while(ui.canvas.lastChild){
        ui.canvas.removeChild(ui.canvas.lastChild);
    }
}

function clearCanvas(){
    ui.allCells.forEach((element) => {element.style['background-color'] = 'white'});
}

function buildCanvas(size){
    ui.canvas.style.display = 'grid';
    ui.canvas.style['grid-template-columns'] = `repeat(${size}, auto)`;
    for(let i = 0; i< size; i++){
        for(let j = 0; j < size; j++){
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('mouseover', (e) => { e.target.style['background-color'] = ui.colorSelector.value;});
            ui.canvas.appendChild(cell);
        }
    }
    ui.allCells = document.querySelectorAll('.cell');
}

function setUp(){
    ui.clearButton.addEventListener('click', clearCanvas);
    ui.sizeSelector.addEventListener('change', (e) => { removeCells(); buildCanvas(e.target.value);})
    buildCanvas(ui.sizeSelector.value);
}

setUp();