function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  input: document.querySelector('input'),
  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
  boxes: document.querySelector('#boxes'),
};

let boxSize = 30;

function createBoxes(amount) {
  const elements = [];

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = `${boxSize}px`;
    div.style.height = `${boxSize}px`;
    div.style.backgroundColor = getRandomHexColor();
    elements.push(div);
    boxSize += 10;
  }

  refs.boxes.append(...elements);
}

function destroyBoxes() {
  refs.boxes.innerHTML = '';
  boxSize = 30;
  refs.input.value = '';
}


refs.createBtn.addEventListener('click', () => {
  const amount = refs.input.valueAsNumber;
  createBoxes(amount);
});

refs.destroyBtn.addEventListener('click', destroyBoxes);