const ui = {
    canvas : document.querySelector('.canvas'),
    clearButton : document.querySelector('.clear'),
    sizeSelector : document.querySelector('.size-selector'),
    colorSelector : document.querySelector('.color-selector'),
    rainbowToggle : document.querySelector('.rainbow-toggle')
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
        2 : 'rgba(0, 255, 0, 1)',
        3 : 'rgba(0, 0, 255, 1)',
        4 : 'rgba(255, 154, 0, 1)',
        5 : 'rgba(208, 222, 33, 1)',
        6 : 'rgba(79, 220, 74, 1)',
        7 : 'rgba(63, 218, 216, 1)',
        8 : 'rgba(47, 201, 226, 1)',
        9 : 'rgba(28, 127, 238, 1)',
        10 : 'rgba(251, 7, 217, 1)',
        11 : 'rgba(255, 220, 33, 1)',
    }
    return colors[Math.floor(Math.random() * Object.keys(colors).length) + 1];
}

function getColor(){
    if (ui.rainbowToggle.classList.contains('active'))
        return getRandomColor()
    return ui.colorSelector.value;
}

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
    ui.sizeSelector.addEventListener('change', (e) => { removeCells(); buildCanvas(e.target.value);})
    ui.rainbowToggle.addEventListener('click', () => {ui.rainbowToggle.classList.toggle('active')})
    buildCanvas(ui.sizeSelector.value);
}

setUp();