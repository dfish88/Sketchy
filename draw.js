const ui = {
    canvas : document.querySelector('.canvas'),
    clearButton : document.querySelector('.clear'),
    sizeSelector : document.querySelector('.size-selector'),
    colorSelector : document.querySelector('.color-selector'),
    rainbowToggle : document.querySelector('.rainbow-toggle'),
    maxCanvasSize : 128
};

function removeCells(){
    while(ui.canvas.lastChild){
        ui.canvas.removeChild(ui.canvas.lastChild);
    }
}

function clearCanvas(){
    ui.allCells.forEach((element) => {element.style['background-color'] = 'white'});
}

function getRandomColor(){
    const colors = {
        1 : 'rgba(255, 0, 0, 1)',
        2 : 'rgba(255, 154, 0, 1)',
        3 : 'rgba(255, 220, 33, 1)',
        4 : 'rgba(208, 222, 33, 1)',
        5 : 'rgba(79, 220, 74, 1)',
        6 : 'rgba(63, 250, 200, 1)',
        7 : 'rgba(47, 201, 226, 1)',
        8 : 'rgba(28, 127, 238, 1)',
        9 : 'rgba(95, 21, 242, 1)',
        10 : 'rgba(186, 12, 248, 1)',
        11 : 'rgba(251, 7, 217, 1)',
        12 : 'rgba(255, 0, 0, 1)',
        13 : 'rgba(252, 227, 2)'
    }
    return colors[Math.floor(Math.random() * Object.keys(colors).length) + 1];
}

function getColor(){
    return ui.rainbowToggle.classList.contains('active') ? getRandomColor() : ui.colorSelector.value;
}

/* build drawing canavs out of grid of divs that each have a listerner added that is used to color them */
function buildCanvas(size){
    ui.canvas.style.display = 'grid';
    ui.canvas.style['grid-template-columns'] = `repeat(${size}, auto)`;
    for(let i = 0; i< size; i++){
        for(let j = 0; j < size; j++){
            let cell = document.createElement('div');
            cell.classList.add('cell');
            cell.addEventListener('mouseover', (e) => { e.target.style['background-color'] = getColor();});
            ui.canvas.appendChild(cell);
        }
    }
    ui.allCells = document.querySelectorAll('.cell');
}

function setUp(){
    ui.clearButton.addEventListener('click', clearCanvas);
    ui.sizeSelector.addEventListener('change', (e) => { removeCells(); buildCanvas(ui.maxCanvasSize - e.target.value);});
    ui.rainbowToggle.addEventListener('click', () => {ui.rainbowToggle.classList.toggle('active')});
    buildCanvas(ui.maxCanvasSize - ui.sizeSelector.value);
}

setUp();