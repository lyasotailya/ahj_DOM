import "./css/style.css";

import "./js/app";

// TODO: write your code in app.js

function getRandomCell() {
    const cells = document.querySelectorAll('.cell');
    const randomIndex = Math.floor(Math.random() * cells.length);
    return cells[randomIndex];
}

function moveImage() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        const img = cell.querySelector('img');
        if (img) {
            img.style.display = 'none';
        }
    });

    const randomCell = getRandomCell();
    let img = randomCell.querySelector('img');

    if (!img) {
        img = document.createElement('img');
        img.src = 'img/goblin.png';
        randomCell.appendChild(img);
    }

    img.style.display = 'block';
}

window.onload = () => {
    moveImage();
    setInterval(moveImage, 1000);
};
