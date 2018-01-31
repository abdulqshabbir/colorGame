//--------------------DOM elements ------------------------------//
const playButton = document.getElementById('playButton');
const easyButton = document.getElementById('easy');
const hardButton = document.getElementById('hard');
const squares = Array.from(document.querySelectorAll(".square"));
const title = document.getElementById('title');
const myColorToDisplay = document.getElementById('pickedColor');

//--------------------Data Structures ---------------------------//

let colors = [];
let myColor = '';
let numberOfSquares = 6;

//-------------------- On page Load...---------------------------//
squares.forEach(function(square) {
  let randomColor = generateRandomColor();
  square.style.backgroundColor = randomColor;
  colors.push(randomColor);
});

pickColor(numberOfSquares);

hardButton.classList.add('selected');

//-------------------Even Listeners ------------------------------//

//------------Main Game Logic -----------//
playButton.addEventListener('click', function() {
  colors = []; //reset colors array
  title.style.backgroundColor = "steelblue"; //

  squares.forEach(function(square) {
    let randomColor = generateRandomColor(); //generate random color
    square.style.backgroundColor = randomColor; //color each square
    colors.push(randomColor); //save result
  });
  pickColor(numberOfSquares); //choose a color
  if(hardButton.classList.contains('selected')) {
    hardButton.style.backgroundColor = 'steelblue';
  }
  if(easyButton.classList.contains('selected')) {
    easyButton.style.backgroundColor = 'steelblue';
  }
});

squares.forEach(function(square) {
  square.addEventListener('click', function(e){
    doesColorMatch(e.target);
  });
});

easyButton.addEventListener('click', function() {
  easyButton.classList.add('selected');
  hardButton.classList.remove('selected');
});

hardButton.addEventListener('click', function() {
  hardButton.classList.add('selected');
  easyButton.classList.remove('selected');
});

//-------------------- Helper functions --------------------------//

function doesColorMatch(squareClicked) {
  let colorOfClickedButton = squareClicked.style.backgroundColor;
  if(colorOfClickedButton === myColor) {
    console.log('you won!');
    if(hardButton.classList.contains('selected')) {
      hardButton.style.backgroundColor = myColor;
    }
    if(easyButton.classList.contains('selected')) {
      easyButton.style.backgroundColor = myColor;
    }
    squares.forEach(function(square){
      square.style.backgroundColor = myColor;
      title.style.backgroundColor = myColor;
    });
  }
  else {
    squareClicked.style.backgroundColor = "#232323";
  }
}

function generateRandomColor() {
  let r = Math.ceil(Math.random()*255);
  let g = Math.ceil(Math.random()*255);
  let b = Math.ceil(Math.random()*255);
  return ('rgb(' + r + ', ' + g + ', ' + b + ')');
}

function pickColor(numberOfSquares) {
  let randomNumber = Math.floor(Math.random()*numberOfSquares);
  myColor = colors[randomNumber];
  console.log('My picked color is: ' + myColor, 'Array index: ', randomNumber);
  myColorToDisplay.textContent = myColor;
}
