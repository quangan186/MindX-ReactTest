let hexCode = '';
function random() {
    let randColor = [randomColors(), gradColor()]
    let color = randColor[Math.floor(Math. random()*randColor.length)];
    document.body.style.background = color;
    hexCode = document.querySelector(".hex_code").innerHTML = color;
}
  
function randomColors() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

function copyCode(){
    navigator.clipboard.writeText(hexCode);
}

let gradColor = () => {
    let colorOne = randomColors();
    let colorTwo = randomColors();
    let angle = Math.floor(Math.random() * 360);
    return `linear-gradient(${angle}deg, ${colorOne}, ${colorTwo});`;
}