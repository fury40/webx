var _a, _b, _c, _d;
// Function to generate a random color in hexadecimal format
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
// Function to change background color when a color link is clicked
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}
// Event listeners for color links
(_a = document.getElementById("color-red")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
    changeBackgroundColor("red");
});
(_b = document.getElementById("color-green")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
    changeBackgroundColor("green");
});
(_c = document.getElementById("color-blue")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () {
    changeBackgroundColor("blue");
});
(_d = document.getElementById("color-random")) === null || _d === void 0 ? void 0 : _d.addEventListener("click", function () {
    var randomColor = getRandomColor();
    changeBackgroundColor(randomColor);
});
