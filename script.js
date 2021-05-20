
var container = document.querySelector('.sketch-container');
var squares;
var button = document.querySelectorAll('.resButton');
var containerLength = container.offsetHeight;
var defaultLength = 16;

// returns random hex value
function getRandomColor() {
    return Math.floor(Math.random()*16777215).toString(16);

}

// gives sqaure div a new random background color
function hoverColorChange(){
    let color = getRandomColor();
    this.style.backgroundColor = color;
}

// resets the square div back to default background color
function removeHoverColorChange(){
    this.style.backgroundColor = "rgb(175, 204, 194)";
    // this.classList.remove('squareHover');

}

// iterates through all sqaures and setups Event Listeners color changing
function addHoverEffect(){
    squares = document.querySelectorAll('.square');

    [...squares].forEach(element => {
        element.addEventListener('mouseover',hoverColorChange);
        element.addEventListener('transitionend',removeHoverColorChange);
    });
}

// removes all square divs from container
function removeSquares(){
    [...squares].forEach(element => { element.parentNode.removeChild(element)});
}

// calculates the length of a square div
function calculateSquareLength(squareNum){
    return (containerLength / squareNum);
}

// creates the square div elements and places them into the container
function createSquares(squareNum,squareLength){
    for(i=0; i<(squareNum*squareNum); i++){
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.height = squareLength;
        square.style.width = squareLength;                                     
        container.append(square);
    }
}


// sets up new canvas for new square length
function changeResolution(){
    var squareNum = prompt("Enter number of squares per side, limit is 100 ");
    if(!squareNum) 
    return  // the user canceled the prompt so return
    removeSquares();

    let squareLength = calculateSquareLength(squareNum);
    createSquares(squareNum,squareLength);
    addHoverEffect();
}



// create default canvas
window.onload = () => {
    createSquares(defaultLength,calculateSquareLength(defaultLength));
    addHoverEffect();
    
};

// give button Event Lister for being clicked and to prompt resolution change
button[0].addEventListener('click',changeResolution);





