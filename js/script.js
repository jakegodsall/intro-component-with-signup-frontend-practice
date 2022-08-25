// elements
const form = document.querySelector('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email-address');
const password = document.getElementById('password');

function isEmpty() {

}

console.log(form);

form.addEventListener('submit', function (e) {

    const elements = Array.from(form.elements);


    console.log(elements);

    elements.forEach(function (element) {
        if (element.id == 'email-address') {
            isEmpty(element);
            isEmail(element);
        }
        isEmpty(element);


    });

    e.preventDefault();
});

function appendErrorMessage(inputElement, message) {
    const formRow = inputElement.parentNode;

    const p = document.createElement('p');
    p.classList.add('error');
    p.innerText = message;

    if (formRow.children.length === 1 && inputElement.type !== 'submit') {
        // if empty, show error message
        formRow.appendChild(p);
    } else if (formRow.children.length !== 1) {
        // remove error message if input has been added
        formRow.removeChild(formRow.lastElementChild);
    }
}


function isEmpty(inputElement) {
    if (inputElement.value === '') {
        appendErrorMessage(inputElement, `${inputElement.placeholder} cannot be empty`);
    }
}

function isEmail(inputElement) {
    const regex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');

    if (!regex.test(inputElement)) {
        appendErrorMessage(inputElement, 'Looks like this is not an email');
    }
}
