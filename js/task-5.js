function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const spanColor = document.querySelector(".color")
const changeColor = document.querySelector(".change-color")

let colorValue = '';

changeColor.addEventListener("click", () => {
  colorValue = getRandomHexColor();
  spanColor.textContent = colorValue;
  document.body.style.backgroundColor = colorValue;}
)



