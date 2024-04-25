console.log(`Warsztat - Walidacja formularza zapisu do Newsletter'a`)
let form = document.getElementById('newsletter-form')
let allAgreeChx = document.getElementById('checkAll')

const validate = (event) => {
    let txtName = document.getElementById('fullName')
    let txtEmail = document.getElementById('e-mail')
    let agree1 = document.getElementById('firstCheck')
    let errors = document.getElementById('errors')
    errors.innerHTML = '';
    
    console.log(errors)

    if (txtName.value.trim() === ''){
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz Imię i nazwisko!';
        errors.appendChild(liError)
    }
    if (txtEmail.value.trim() === ''){
        let liError = document.createElement('li');
        liError.innerText = 'Wpisz adres email!';
        errors.appendChild(liError)
    }
    if (!txtEmail.value.includes('@')){
        let liError = document.createElement('li');
        liError.innerText = 'Adres email musi zawierac @!';
        errors.appendChild(liError)
    }
    if (!agree1.checked){
        let liError = document.createElement('li');
        liError.innerText = 'Pierwsza zgoda jest wymagana!';
        errors.appendChild(liError)
    }
    if(errors.children.length > 0){
        event.preventDefault()
    }
}

const allAgree = (event) => {
    let agree1 = document.getElementById('firstCheck')
    let agree2 = document.getElementById('secondCheck')
    
    agree1.checked = event.target.checked
    agree2.checked = event.target.checked

    agree1.disabled = event.target.checked
    agree2.disabled = event.target.checked

    console.log(event.target.checked)
    console.log(agree1.checked)
    console.log(agree2.checked)

}

form.addEventListener('submit', validate)
allAgreeChx.addEventListener('change', allAgree)