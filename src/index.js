import "./css/style.css";

import "./js/app";

// TODO: write your code in app.js

function getRandomCell() {
    const cells = document.querySelectorAll('.cell');
    const randomIndex = Math.floor(Math.random() * cells.length);
    return cells[randomIndex];
}

// Функция для перемещения картинки
function moveImage() {
    // Скрываем картинку во всех ячейках
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        const img = cell.querySelector('img');
        if (img) {
            img.style.display = 'none'; // Скрываем картинку
        }
    });

    // Показываем картинку в новой случайной ячейке
    const randomCell = getRandomCell();
    let img = randomCell.querySelector('img');

    // Если картинки в ячейке нет, создаем её
    if (!img) {
        img = document.createElement('img');
        img.src = 'img/goblin.png'; // Замените на путь к вашей картинке
        randomCell.appendChild(img);
    }

    img.style.display = 'block'; // Показываем картинку
}

// Добавляем картинку в случайную ячейку при загрузке страницы
window.onload = () => {
    moveImage(); // Показываем картинку в случайной ячейке
    // Перемещаем картинку каждые 2 секунды (2000 мс)
    setInterval(moveImage, 1000);
};
