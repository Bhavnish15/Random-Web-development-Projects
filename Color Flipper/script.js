const colors = [
  "green",
  "brown",
  "red",
  "rgba(133, 122, 200)",
  "#f15025",
  "#000000",
  "#FF0000",
  "#0000FF",
  "#FFFF00",
  "#C0C0C0",
  "#800000",
  "#808000",
  "#FF69B4",
  "#FFB6C1",
  "#CD853F",
];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //Get Random Number between 0 - 3
  const randomNumber = getRandomNumberr();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
function getRandomNumberr() {
  return Math.floor(Math.random() * colors.length);
}
