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
let mode = 'hard';

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
  title.style.backgroundColor = "steelblue"; //set background color to blue

  squares.forEach(function(square) {
    let randomColor = generateRandomColor(); //generate random color
    square.style.backgroundColor = randomColor; //color each square
    colors.push(randomColor); //save result
  });
  pickColor(numberOfSquares); //choose a color
});

squares.forEach(function(square) {
  square.addEventListener('click', function(e){
    doesColorMatch(e.target);
  });
});

easyButton.addEventListener('click', function() {
  mode = 'easy';
  console.log('easy mode!');
  numberOfSquares = 3;  //pick color from first three squares

  //hide last three squares
  squares[5].style.display = 'none';
  squares[4].style.display = 'none';
  squares[3].style.display = 'none';

  //style selected mode button and reverse styling on other button
  easyButton.style.backgroundColor = 'steelblue';
  easyButton.style.color = 'white';
  hardButton.style.backgroundColor = 'white';
  hardButton.style.color = 'steelblue';

  //style title
  title.style.backgroundColor = "steelblue";

  colors = []; //reset colors array

  squares.forEach(function(square) {
    let randomColor = generateRandomColor(); //generate random color
    square.style.backgroundColor = randomColor; //color each square
    colors.push(randomColor); //save result
  });
  pickColor(numberOfSquares); //choose a color ONLY from first three

});

hardButton.addEventListener('click', function() {
  mode = 'hard';
  console.log('hard mode!');
  numberOfSquares = 6;  //pick color from first three squares

  //hide last three squares
  squares[5].style.display = 'inline-block';
  squares[4].style.display = 'inline-block';
  squares[3].style.display = 'inline-block';

  //style selected mode button and reverse styling on other button
  easyButton.style.backgroundColor = 'white';
  easyButton.style.color = 'steelblue';
  hardButton.style.backgroundColor = 'steelblue';
  hardButton.style.color = 'white';

  //style title
  title.style.backgroundColor = "steelblue";

  colors = []; //reset colors array

  squares.forEach(function(square) {
    let randomColor = generateRandomColor(); //generate random color
    square.style.backgroundColor = randomColor; //color each square
    colors.push(randomColor); //save result
  });
  pickColor(numberOfSquares); //choose a color ONLY from first three
});

//-------------------- Helper functions --------------------------//

function doesColorMatch(squareClicked) {
  let colorOfClickedButton = squareClicked.style.backgroundColor;
  if(colorOfClickedButton === myColor) {
    console.log('you won!');
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
