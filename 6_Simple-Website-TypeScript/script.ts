// Function to generate a random color in hexadecimal format
function getRandomColor(): string {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Function to change background color when a color link is clicked
function changeBackgroundColor(color: string) {
  document.body.style.backgroundColor = color;
}

// Event listeners for color links
document.getElementById("color-red")?.addEventListener("click", () => {
  changeBackgroundColor("red");
});

document.getElementById("color-green")?.addEventListener("click", () => {
  changeBackgroundColor("green");
});

document.getElementById("color-blue")?.addEventListener("click", () => {
  changeBackgroundColor("blue");
});

document.getElementById("color-random")?.addEventListener("click", () => {
  const randomColor = getRandomColor();
  changeBackgroundColor(randomColor);
});
