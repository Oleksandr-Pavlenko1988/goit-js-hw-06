const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');

inputEl.addEventListener('input', e => {
    const currentValue = e.currentTarget.value.trim();
    outputEl.textContent = currentValue;
    if (currentValue === '') {
    outputEl.textContent = 'Anonymous';
    }
});
