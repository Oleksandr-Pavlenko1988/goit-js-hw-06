const form = document.querySelector('.login-form');
const formInput = document.querySelectorAll('input');

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit (e) {
    e.preventDefault();

    const formElements = e.currentTarget.elements;

    const email = formElements.email.value;
    const password = formElements.password.value;

    if (email === '' || password === '') {
        alert('Всі поля повинні бути заповнені!')
    }

    const formData = {
        email,
        password,
    }
    
    console.log(formData);
    e.currentTarget.reset();
}