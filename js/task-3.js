const textInput = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

textInput.addEventListener('input', () => {
  const inputValue = textInput.value.trim();
  output.textContent = inputValue === '' ? 'Anonymous' : inputValue;
});
