const container = document.querySelector(".container");
const firstDiv = document.querySelector("#first");
const secondDiv = document.querySelector("#second");
const thirdDiv = document.querySelector("#third");
const fourthDiv = document.querySelector("#fourth");

// digital number array
const numberArray = [
  [1,1,1,1,0,1,1,0,1,1,0,1,1,1,1],
  [0,0,1,0,0,1,0,0,1,0,0,1,0,0,1],
  [1,1,1,0,0,1,1,1,1,1,0,0,1,1,1],
  [1,1,1,0,0,1,1,1,1,0,0,1,1,1,1],
  [1,0,1,1,0,1,1,1,1,0,0,1,0,0,1],
  [1,1,1,1,0,0,1,1,1,0,0,1,1,1,1],
  [1,1,1,1,0,0,1,1,1,1,0,1,1,1,1],
  [1,1,1,1,0,1,0,0,1,0,0,1,0,0,1],
  [1,1,1,1,0,1,1,1,1,1,0,1,1,1,1],
  [1,1,1,1,0,1,1,1,1,0,0,1,1,1,1]
];

// make grids for numbers
function makeNumberGrid(number) {
  for(let i=0; i<15; i++) {
    const div = document.createElement("div");
    div.id = i;
    if(i%3) {
      div.className = "square";
      number.appendChild(div);
    } 
    else {
      div.className = "square first";
      number.appendChild(div);
      }
    }
}

// add number from numbersArray to grid
function addNumberToGrid(arr, grid) {
  squares = grid.childNodes;
  for(let i=0; i<arr.length; i++) {
    if(arr[i] === 1) {
      squares[i].style.backgroundColor = "black";
    }
    else {
      squares[i].style.backgroundColor = "white";
    }
  }
}

function startClock() {
  let time = new Date();
  let hours = time.getHours().toString().split("");
  let minutes = time.getMinutes().toString().split("");
  // if hour or minute goes 0-9
  // show time right 
  if(minutes.length === 1) {
    minutes[1] = minutes[0];
    minutes[0] = 0;
  }
  if(hours.length === 1) {
    hours[1] = hours[0];
    hours[0] = 0;
  }

  addNumberToGrid(numberArray[hours[0]], firstDiv);
  addNumberToGrid(numberArray[hours[1]], secondDiv);
  addNumberToGrid(numberArray[minutes[0]], thirdDiv);
  addNumberToGrid(numberArray[minutes[1]], fourthDiv);
}


makeNumberGrid(firstDiv);
makeNumberGrid(secondDiv);
makeNumberGrid(thirdDiv);
makeNumberGrid(fourthDiv);
// check time every second
setInterval(startClock, 1000);