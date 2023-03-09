const inputEl = document.querySelector('#validation-input');

inputEl.addEventListener('blur', e => {
    const currentValue = e.currentTarget.value.length;
    if (currentValue === Number(inputEl.dataset.length)) {
        inputClassReplacement('valid', 'invalid');
    } else {
        inputClassReplacement('invalid', 'valid');
    }
});

function inputClassReplacement(add, remove) {
    inputEl.classList.add(add);
    inputEl.classList.remove(remove);
};