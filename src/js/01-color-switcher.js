// Получаем ссылки на кнопки
const btnStartRef = document.querySelector('[data-start]');
const btnStopRef = document.querySelector('[data-stop]');

// Вводим переменную для получения id созданного таймером
let idInterval = null;

// Функция, которая вызывается при клике по кнопке Start
const onChangeColor = (event) => {
    idInterval = setInterval(() => {
    const color = getRandomHexColor();
    document.body.style.backgroundColor =`${color}`;
    btnStartRef.disabled = true;
    btnStopRef.disabled = false;}, 1000)
}

// Функция, которая вызывается при клике по кнопке Stop
const onStopChangeColor = (event) => {
    clearInterval(idInterval);
    btnStartRef.disabled = false;
    btnStopRef.disabled = true;
}
// Функция для генерации случайного цвета 
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Вешаем слушателей на кнопки
btnStartRef.addEventListener("click", onChangeColor);
btnStopRef.addEventListener("click", onStopChangeColor);