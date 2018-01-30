//--------------------DOM elements ------------------------------//
const playButton = document.getElementById('playButton');
const easyButton = document.getElementById('easy');
const hardButton = document.getElementById('hard');
const squares = Array.from(document.querySelectorAll(".square"));



//-------------------Even Listeners ------------------------------//
playButton.addEventListener('click', function() {
  squares.forEach(function(square) {
    square.style.backgroundColor = generateRandomColor();
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

function generateRandomColor() {
  let r = Math.ceil(Math.random()*255);
  let g = Math.ceil(Math.random()*255);
  let b = Math.ceil(Math.random()*255);
  return ('RGB(' + r + ', ' + g + ', ' + b + ')');
}
