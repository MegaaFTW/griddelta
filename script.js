var randomNumber;
var Number;
function giveRandom() {
  for (let i = 0; i < 1; i++) {
    randomNumber = Math.floor(Math.random() * 25) + 1;
    Number = randomNumber;
  }
}

giveRandom();

let minutes = 0;
let seconds = 0;
let displayTimer = document.querySelector(".timer");

console.log(
  window.localStorage.getItem("HighScore")
    ? window.localStorage.getItem("HighScore")
    : 0
);

let HighScore = window.localStorage.getItem("HighScore")
  ? window.localStorage.getItem("HighScore")
  : 0;

document.querySelector(".span").textContent = String(HighScore);

const array = [
  "#D14D72",
  "#E86A33",
  "#57C5B6",
  "#FFF2CC",
  "#609966",
  "#F2CD5C",
];
const arraynew = {
  ["#D14D72"]: "orange",
  ["#E86A33"]: "pink",
  ["#57C5B6"]: "cyan",
  ["#FFF2CC"]: "white",
  ["#609966"]: "green",
  ["#F2CD5C"]: "yellow",
};

let timeRun = false;
const colorObj = {
  color_orange: 0,
  color_pink: 0,
  color_cyan: 0,
  color_white: 0,
  color_green: 0,
  color_yellow: 0,
  spots: [],

  color_orange_code: "#D14D72",
  color_pink_code: "#E86A33",
  color_cyan_code: "#57C5B6",
  color_white_code: "#FFF2CC",
  color_green_code: "#609966",
  color_yellow_code: "#F2CD5C",
};

preColor(colorObj.color_orange, colorObj.color_orange_code);
preColor(colorObj.color_pink, colorObj.color_pink_code);
preColor(colorObj.color_cyan, colorObj.color_cyan_code);
preColor(colorObj.color_white, colorObj.color_white_code);
preColor(colorObj.color_green, colorObj.color_green_code);
preColor(colorObj.color_yellow, colorObj.color_yellow_code);

function preColor(color, colorcode) {
  while (color < 3) {
    let randomvariable = Math.floor(Math.random() * 25) + 1;
    if (!colorObj.spots.includes(randomvariable) && randomvariable !== Number) {
      document.querySelector(
        ".btn" + String(randomvariable)
      ).style.backgroundColor = colorcode;
      colorObj.spots.push(randomvariable);
      color++;
    }
  }
}

const targetcolor = {
  ["color_orange_count"]: 0,
  ["color_pink_count"]: 0,
  ["color_cyan_count"]: 0,
  ["color_white_count"]: 0,
  ["color_green_count"]: 0,
  ["color_yellow_count"]: 0,
};

function colorstotarget() {
  for (let i = 1; i < 10; i++) {
    let n = Math.floor(Math.random() * 6);
    var newheh = array[n];
    var newyeah = "color_" + arraynew[newheh] + "_count";
    targetcolor[newyeah]++;
    if (targetcolor[newyeah] <= 3) {
      document.querySelector(".button" + String(i)).style.backgroundColor =
        array[n];
    } else {
      i--;
    }
  }
}

colorstotarget();

function justdoit() {
  if (timeRun) return;
  document.querySelector(".titleButton1").classList.add("hideButton");
  document.querySelector(".titleButton2").classList.remove("hideButton");
  if (timer != 0) {
    clearInterval(timer);
  }
  console.log("hello");

  timer = setInterval(stopwatch, 1000);

  console.log(colorObj.spots);
}

function giveremainingcolors() {
  for (let i = 1; i < 26; i++) {
    if (!colorObj.spots.includes(i)) {
      let n = Math.floor(Math.random() * 6);
      document.querySelector(".btn" + String(i)).style.backgroundColor =
        array[n];
    }
  }
}
giveremainingcolors();

function giveEmpty() {
  document.querySelector(".btn" + String(randomNumber)).style.background =
    "transparent";
}
giveEmpty();

let boolean = false;
document.querySelector(".titleButton2").addEventListener("click", function () {
  clearInterval(timer);
  console.log(seconds);
  document.querySelector(".endMessage-container").classList.remove("hideIt");
  for (let i = 7; i < 20; i++) {
    if (i !== 10 && i !== 11 && i !== 15 && i !== 16) {
      if (
        document.querySelector(".btn" + String(i)).style.backgroundColor ===
        document.querySelector(".win" + String(i)).style.backgroundColor
      ) {
        console.log("true");
        boolean = true;
      } else {
        console.log("false");
        boolean = false;
        break;
      }
    }
  }

  if (boolean) {
    score = 300 - (minutes * 60 + seconds);
    console.log(score);
    if (HighScore < score) {
      HighScore = score;
      window.localStorage.setItem("HighScore", HighScore);
    }

    document.querySelector(".yourScore").textContent =
      "Your Score: " + String(score);
    document.querySelector(".highScoreEnd").textContent =
      "High Score: " + String(HighScore);
    document.querySelector(".span").textContent = String(HighScore);
  } else {
    score = 0;
    document.querySelector(".winOrNot").textContent = "You lost!";
    document.querySelector(".yourScore").textContent =
      "Your Score: " + String(score);
    document.querySelector(".highScoreEnd").textContent =
      "High Score: " + String(HighScore);
    document.querySelector(".span").textContent = String(HighScore);
  }
});

let timer = 0;
function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  let s = seconds < 10 ? "0" + seconds : seconds;
  let m = minutes < 10 ? "0" + minutes : minutes;
  displayTimer.textContent = m + ":" + s;
}

let givebool = false;

for (let i = 1; i < 26; i++) {
  document.querySelector(".btn" + String(i)).addEventListener("click", () => {
    givebool = true;
    justdoit();
    timeRun = true;
    if (i !== Number) {
      if (Math.abs(Number - i) === 1 || Math.abs(Number - i) === 5) {
        let temp = document.querySelector(".btn" + String(Number)).style
          .backgroundColor;
        document.querySelector(".btn" + String(Number)).style.backgroundColor =
          document.querySelector(".btn" + String(i)).style.backgroundColor;
        document.querySelector(".btn" + String(i)).style.backgroundColor = temp;
        Number = i;
      }
    }
  });
}

document.querySelector(".titleButton1").addEventListener("click", function () {
  for (let i = 1; i < 26; i++) {
    document.querySelector(".btn" + String(i)).addEventListener("click", () => {
      if (i !== Number) {
        if (Math.abs(Number - i) === 1 || Math.abs(Number - i) === 5) {
          let temp = document.querySelector(".btn" + String(Number)).style
            .backgroundColor;
          document.querySelector(
            ".btn" + String(Number)
          ).style.backgroundColor = document.querySelector(
            ".btn" + String(i)
          ).style.backgroundColor;
          document.querySelector(".btn" + String(i)).style.backgroundColor =
            temp;
          Number = i;
        }
      }
    });
  }
  justdoit();
});

document.querySelector(".fa-xmark").addEventListener("click", function () {
  document.querySelector(".endMessage-container").classList.add("hideIt");
});

document.querySelector(".restart").addEventListener("click", function () {
  document.querySelector(".endMessage-container").classList.add("hideIt");
  document.querySelector(".titleButton2").classList.add("hideButton");
  document.querySelector(".titleButton1").classList.remove("hideButton");
  timeRun = false;
  colorObj.color_orange = 0;
  colorObj.color_pink = 0;
  colorObj.color_cyan = 0;
  colorObj.color_white = 0;
  colorObj.color_green = 0;
  colorObj.color_yellow = 0;

  colorObj.spots = [];
  preColor(colorObj.color_orange, colorObj.color_orange_code);
  preColor(colorObj.color_pink, colorObj.color_pink_code);
  preColor(colorObj.color_cyan, colorObj.color_cyan_code);
  preColor(colorObj.color_white, colorObj.color_white_code);
  preColor(colorObj.color_green, colorObj.color_green_code);
  preColor(colorObj.color_yellow, colorObj.color_yellow_code);

  giveremainingcolors();

  targetcolor["color_orange_count"] = 0;
  targetcolor["color_pink_count"] = 0;
  targetcolor["color_cyan_count"] = 0;
  targetcolor["color_white_count"] = 0;
  targetcolor["color_green_count"] = 0;
  targetcolor["color_yellow_count"] = 0;

  colorstotarget();

  giveRandom();
  giveEmpty();
  score = 0;

  seconds = 0;
  minutes = 0;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let m = minutes < 10 ? "0" + minutes : minutes;
  displayTimer.textContent = m + ":" + s;
});

