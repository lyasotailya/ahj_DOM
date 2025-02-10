import "./css/style.css";
import img_goblin from "./img/goblin.png";
import "./js/app";

// TODO: write your code in app.js

function getRandomInt() {
  const cells = document.querySelectorAll(".cell");
  const randomIndex = Math.floor(Math.random() * cells.length);
  return randomIndex;
}

function moveImage() {
  const cells = document.querySelectorAll('.cell');
    let currentCellWithImage = null;
    cells.forEach((cell, index) => {
      const img = cell.querySelector('img');
      if (img && img.style.display !== 'none') {
        currentCellWithImage = index;
      }
    });

    if (currentCellWithImage !== null) {
      const currentImg = cells[currentCellWithImage].querySelector('img');
      currentImg.style.display = 'none';
    }

    let randomIndex;
    do {
        randomIndex = getRandomInt();
    } while (randomIndex === currentCellWithImage);

    const newImg = cells[randomIndex].querySelector('img');
    if (newImg) {
      newImg.style.display = 'block';
    } else {
      const img = document.createElement('img');
      img.src = img_goblin;
      img.style.display = 'block';
      cells[randomIndex].appendChild(img);
    }
}

window.onload = () => {
  moveImage();
  setInterval(moveImage, 1000);
};
