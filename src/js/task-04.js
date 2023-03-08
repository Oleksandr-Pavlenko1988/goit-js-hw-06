const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const value = document.querySelector('#value');

let counterValue = 0;

decrementBtn.addEventListener('click', evt => {
    counterValue -= 1;
    value.textContent = counterValue;
});

incrementBtn.addEventListener('click', evt => {
    counterValue += 1;
    value.textContent = counterValue;
});