// making random colors on our html page
//random function
const randomFunction = () => {
    return Math.floor(Math.random() * 256);
};

const randomColor = () => {
    const red = randomFunction();
    const green = randomFunction();
    const blue = randomFunction();
    return `rgb(${red} ${green} ${blue})`;
};

// window.onload = document.body.style.background = "yellow"

const bgcolor = color => {
    document.body.style.backgroundColor = color;
    const button = document.getElementById("button");
    button.style.backgroundColor = color
}

const addColor = () => {
    const color = randomColor();
    return bgcolor(color);
};

addEventListener("click", () => {
    const buttonClick = document.getElementById("button");
    addColor();
});
