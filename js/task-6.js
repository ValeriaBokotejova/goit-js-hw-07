function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const boxes = document.querySelector('#boxes');
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');
const userInput = document.querySelector('input');

create.addEventListener('click', () => {
  const amount = Number(userInput.value);
  if (amount < 1 || amount >= 100) {
    return;
  } else {
    createBoxes(amount);
    userInput.value = '';
  }
});
destroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  destroyBoxes();
  let fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement('div');
    div.style.width = `${30 + i * 10}px`;
    div.style.height = `${30 + i * 10}px`;
    div.style.backgroundColor = getRandomHexColor();
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
}
function destroyBoxes() {
  boxes.innerHTML = '';
}
