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
        if (element.value == '' && element.type !== 'submit') {
            emptyInput(element);
        } else {

        }
    });

    e.preventDefault();
});

function emptyInput(inputElement) {
    const formRow = inputElement.parentNode;

    if (formRow.children.length == 1) {
        const p = document.createElement('p');
        p.classList.add('error');
        p.innerText = `${inputElement.placeholder} cannot be empty`;
        formRow.appendChild(p);
    }

}