const ui = {
    canvas : document.querySelector('.canvas')
};

ui.canvas.style.display = 'grid';
ui.canvas.style['grid-template-columns'] = 'repeat(16, auto)';

for(let i = 0; i< 16; i++){
    for(let j = 0; j < 16; j++){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        ui.canvas.appendChild(cell);
    }
}
