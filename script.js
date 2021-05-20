
var container = document.querySelector('.sketch-container');
var squares;
var button = document.querySelectorAll('.resButton');
var containerLength = container.offsetHeight;
var defaultLength = 16;

function getRandomColor() {
    return Math.floor(Math.random()*16777215).toString(16);

}
function hoverColorChange(){
    let color = getRandomColor();
    this.style.backgroundColor = color;

    //this.classList.add('squareHover');
}

function removeHoverColorChange(){
    this.style.backgroundColor = "rgb(175, 204, 194)";
    // this.classList.remove('squareHover');

}

function addHoverEffect(){
    squares = document.querySelectorAll('.square');

    [...squares].forEach(element => {
        element.addEventListener('mouseover',hoverColorChange);
        element.addEventListener('transitionend',removeHoverColorChange);
    });
}

function removeSquares(){
    [...squares].forEach(element => { element.parentNode.removeChild(element)});
}

function calculateSquareLength(squareNum){
    return (containerLength / squareNum);
}
function createSquares(squareNum,squareLength){
    for(i=0; i<(squareNum*squareNum); i++){
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.height = squareLength;
        square.style.width = squareLength;                                     
        container.append(square);
    }
}

function createNewSketch(squareNum){
    let squareLength = calculateSquareLength(squareNum);
    createSquares(squareNum,squareLength);
}

function changeResolution(){
    var squareNum = prompt("Enter number of squares per side, limit is 100 ");
    if(!squareNum)
    return
    removeSquares();

    createNewSketch(squareNum);
    addHoverEffect();
}


button[0].addEventListener('click',changeResolution);

window.onload = () => {
    createSquares(defaultLength,calculateSquareLength(defaultLength));
    addHoverEffect();
    
};




