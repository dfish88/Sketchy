const ui = {
    canvas : document.querySelector('.canvas'),
    clearButton : document.querySelector('.clear'),
    sizeSelector : document.querySelector('.size-selector')
};

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
            cell.addEventListener('mouseover', (e) => { e.target.style['background-color'] = 'black';});
            ui.canvas.appendChild(cell);
        }
    }
    ui.allCells = document.querySelectorAll('.cell');
}

function setUp(){
    ui.clearButton.addEventListener('click', clearCanvas);
    ui.sizeSelector.addEventListener('change', (e) => { buildCanvas(e.target.value); clearCanvas(); })
    buildCanvas(ui.sizeSelector.value);
}

setUp();