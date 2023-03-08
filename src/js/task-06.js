const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', e => {
    const currentValue = e.currentTarget.value.length;
    if (currentValue === Number(inputEl.dataset.length)) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
        inputEl.classList.remove('valid');
    }
});