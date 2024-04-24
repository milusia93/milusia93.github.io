console.log(`Warsztat - Obsługa formularza 'Imie i nazwisko'`)
let formToSubmit = document.getElementById('form');

const submitForm = (event) => {
    event.preventDefault();
    let firstName = document.querySelector('input[name="fname"]')
    let lastName = document.querySelector('input[name="lname"]')
    console.log(`Imię: ${firstName.value}, Nazwisko: ${lastName.value}`)
}

formToSubmit.addEventListener('submit', submitForm);



