const canvas = document.querySelector("#etch-a-sketch");
const ctx = canvas.getContext("2d");
const shakeButton = document.querySelector(".shake");
const WIDTH = 30;

const { width, height } = canvas;
let hue = Math.floor(Math.random() * 360);

let x = Math.floor(Math.random() * width);
let y = Math.floor(Math.random() * height);

ctx.lineJoin = "round";
ctx.lineCap = "round";
ctx.lineWidth = WIDTH;

ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath();
ctx.moveTo(x, y);
ctx.lineTo(x, y);
ctx.stroke();

function draw({ key }) {
  hue += WIDTH;
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  console.log(hue);
  ctx.beginPath();
  ctx.moveTo(x, y);

  switch (key) {
    case "ArrowLeft":
      x -= WIDTH;
      break;
    case "ArrowRight":
      x += WIDTH;
      break;
    case "ArrowUp":
      y -= WIDTH;
      break;
    case "ArrowDown":
      y += WIDTH;
      break;
    default:
      break;
  }

  ctx.lineTo(x, y);
  ctx.stroke();
}

function handleKey(e) {
  if (e.key.includes("Arrow")) {
    e.preventDefault();
    draw({ key: e.key });
  }
}

function clearCanvas() {
  canvas.classList.add("shake");
  ctx.clearRect(0, 0, width, height);
  canvas.addEventListener(
    "animationend",
    () => canvas.classList.remove("shake"),
    { once: true }
  );
}

window.addEventListener("keydown", handleKey);
shakeButton.addEventListener("click", clearCanvas);
