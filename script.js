function validateForm() {
    const formFields = [
        { id: 'pib', regex: /^[А-ЯІЇЄҐа-яіїєґ'\s]+ [А-ЯІЇЄҐ]\.[А-ЯІЇЄҐ]\.$/ },
        { id: 'faculty', regex: /^[А-ЯІЇЄҐа-яіїєґ]+$/ },
        { id: 'birthdate', regex: /^\d{2}\.\d{2}\.\d{4}$/ },
        { id: 'address', regex: /^м\.\s[А-ЯІЇЄҐа-яіїєґ]+$/ },
        { id: 'email', regex: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ }
    ];

    let isValid = true;

    formFields.forEach(field => {
        const input = document.getElementById(field.id);
        if (!field.regex.test(input.value)) {
            input.classList.add('error');
            isValid = false;
        } else {
            input.classList.remove('error');
        }
    });

    if (isValid) {
        alert('Усі дані введено правильно!');
        const formData = formFields.map(field => `${field.id}: ${document.getElementById(field.id).value}`).join('\n');
        alert(formData);
    } else {
        alert('Перевірте введені дані!');
    }
}