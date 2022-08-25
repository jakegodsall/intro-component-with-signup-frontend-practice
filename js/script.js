// elements
const form = document.querySelector('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email-address');
const password = document.getElementById('password');


form.addEventListener('submit', function (e) {

    const elements = Array.from(form.elements);

    elements.forEach(function (element) {

        isEmpty(element);
        if (element.id == 'email-address') {
            isEmail(element);
        }
    });

    e.preventDefault();
});

function clearErrors(inputElement) {
    // remove styling to input elements
    if (inputElement.classList.contains('error')) {
        inputElement.className = '';
        // remove error message
        const parent = inputElement.parentNode;
        parent.removeChild(parent.lastChild);
    }
}

function showError(inputElement, message) {
    const formRow = inputElement.parentNode;

    const p = document.createElement('p');
    p.classList.add('error-msg');
    p.innerText = message;


    if (formRow.children.length === 1 && inputElement.type !== 'submit') {
        // add error class to inputElement
        inputElement.classList.add('error');

        // if empty, show error message
        formRow.appendChild(p);
    }
}


function isEmpty(inputElement) {
    if (inputElement.value === '') {
        showError(inputElement, `${inputElement.placeholder} cannot be empty`);
    } else {
        clearErrors(inputElement);
    }
}

function isEmail(inputElement) {
    const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

    if (!regex.test(inputElement)) {
        showError(inputElement, 'Looks like this is not an email');
    }
}

