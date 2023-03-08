function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  input: document.querySelector('input'),
  createButton: document.querySelector('button[data-create]'),
  destroyButton: document.querySelector('button[data-destroy]'),
  boxes: document.querySelector('#boxes'),
}

refs.createButton.addEventListener('click', createBoxes);
refs.destroyButton.addEventListener('click', destroyBoxes);

const boxes = [];

function createBoxes() {
  let size = 30;
  for (let i = 1; i <= refs.input.value; i += 1) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    size += 10;
    boxes.push(box);
  }
  refs.boxes.append(...boxes);
  refs.input.value = '';
}

function destroyBoxes() {
  refs.boxes.innerHTML = '';
}