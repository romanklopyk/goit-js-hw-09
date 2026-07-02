const formData = {
    email: '',
    message: '',
};

const $form = document.querySelector('.feedback-form');

$form.addEventListener('input', (e) => {
    e.preventDefault();
    formData[e.target.name] = e.target.value;
    window.localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

$form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (formData.email && formData.message) {
        window.localStorage.setItem('feedback-form-state', JSON.stringify(formData));
        console.log(formData);
        clearFormData();
        clearLocalStorage();
        $form.reset();
    } else {
        alert('Усі поля обов\'язкові до заповнення');
    }
});

function checkLocalStorage() {
    const rawData = window.localStorage.getItem('feedback-form-state');
    if (rawData) {
        const { email, message } = JSON.parse(rawData);
        formData.email = email;
        formData.message = message;
    } else {
        formData.email = '';
        formData.message = '';
    }
}

checkLocalStorage();

function renderForm() {
    $form.email.value = formData.email;
    $form.message.value = formData.message;
}

renderForm();

function clearFormData() {
    formData.email = '';
    formData.message = '';
}

function clearLocalStorage() {
    window.localStorage.removeItem('feedback-form-state');
}
