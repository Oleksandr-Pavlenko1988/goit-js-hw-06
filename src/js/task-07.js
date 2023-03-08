const fsControl = document.querySelector('input[type = range]');const textEl = document.querySelector('#text');

fsControl.addEventListener('input', e => textEl.style.fontSize = `${e.currentTarget.value}px`)
