
var container = document.querySelector('.sketch-container');
var squares;


function hoverColorChange(){
    this.classList.add('squareHover');
}

function removeHoverColorChange(){
    this.classList.remove('squareHover');

}

window.onload = () => {
    for(i=0; i<16; i++){
        let square = document.createElement('div');
        square.classList.add('square');                                      
        container.append(square);
    }

    squares = document.querySelectorAll('.square');

    [...squares].forEach(element => {
        element.addEventListener('mouseover',hoverColorChange);
        element.addEventListener('transitionend',removeHoverColorChange);
    });
};




