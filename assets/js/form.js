let myForm = document.querySelector("form");
let inputPrenom = document.querySelector("#prenom");
let inputNom = document.querySelector("#nom");
let inputEmail = document.querySelector("#email");
let inputMessage = document.querySelector("#message");
let inputSelect = document.querySelector("#contactRaison");
// console.log(myForm);
// console.log(inputPrenom);
// console.log(inputNom);
// console.log(inputEmail);
// console.log(inputSelect);
// console.log(inputMessage);

myForm.addEventListener('submit', function (e) {
    e.preventDefault();

    let valuePrenom = inputPrenom.value.trim();
    let valueNom = inputNom.value.trim();
    let valueEmail = inputEmail.value.trim();
    let valueMessage = inputMessage.value.trim();
    let valueSelect = inputSelect.value.trim();

    let lenghtPrenom = valuePrenom.length;
    let lenghtNom = valueNom.length;
    let lenghtEmail = valueEmail.length;
    let lenghtMessage = valueMessage.length;
    let lenghtSelect = valueSelect.length;

    // On teste la longueur des valeurs pour déterminer si la méthode trim() fonctionne bien.
    // Rappel : La méthode trim() permet d'enlever les espaces avant et après
    console.log(lenghtPrenom);
    console.log(lenghtNom);
    console.log(lenghtEmail);
    console.log(lenghtMessage);
    console.log(lenghtSelect);
    // console.log(lengthEmail);
    // console.log(lengthPassword);


    //CREATION DU REGEX POUR LE MAIL
    let regexMail = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

    // TEST DE LA VALIDATION DU PRENOM
    // Le nombre de caractère est supérieur à 2
    let prenomError = document.querySelector(".invalid-prenom");

    if (lenghtPrenom < 2) {
        prenomError.classList.remove("d-none");
        inputPrenom.classList.add("border");
        inputPrenom.classList.add("border-danger");
        inputPrenom.classList.remove("border");
        inputPrenom.classList.remove("border-success");
    } else {
        prenomError.classList.add("d-none");
        inputPrenom.classList.add("border");
        inputPrenom.classList.add("border-success");
        inputPrenom.classList.remove("border");
        inputPrenom.classList.remove("border-danger");
    }

    // TEST DE LA VALIDATION DU NOM
    let nomError = document.querySelector(".invalid-nom");

    if (lenghtNom < 2) {
        nomError.classList.remove("d-none");
        inputNom.classList.add("border");
        inputNom.classList.add("border-danger");
        inputNom.classList.remove("border");
        inputNom.classList.remove("border-success");

    } else {
        nomError.classList.add("d-none");
        inputNom.classList.add("border");
        inputNom.classList.add("border-success");
        inputNom.classList.remove("border");
        inputNom.classList.remove("border-danger");
    }

    //TEST DE LA VALIDATION DU MAIL

    // On utilisera la variable regexMail
    let emailError = document.querySelector(".invalid-email");

    if (!regexMail.test(valueEmail)) {
        emailError.classList.remove("d-none");
        inputEmail.classList.remove("border");
        inputEmail.classList.remove("border-success");
        inputEmail.classList.add("border");
        inputEmail.classList.add("border-danger");
    } else {
        emailError.classList.add("d-none");
        inputEmail.classList.add("border");
        inputEmail.classList.add("border-success");
        inputEmail.classList.remove("border");
        inputEmail.classList.remove("border-danger");
    }

    //TEST DE LA VALIDATION DU MESSAGE
    let messageError = document.querySelector(".invalid-message");

    if (lenghtMessage < 50) {
        messageError.classList.remove("d-none");
        inputMessage.classList.add("border");
        inputMessage.classList.add("border-danger");
        inputMessage.classList.remove("border");
        inputMessage.classList.remove("border-success");
    } else {
        messageError.classList.add("d-none");
        inputMessage.classList.add("border");
        inputMessage.classList.add("border-success");
        inputMessage.classList.remove("border");
        inputMessage.classList.remove("border-danger");
    }

    // TEST DE LA VALIDATION DU SELECT
    let selectError = document.querySelector(".invalid-select");

    // on teste si la valeur est égale à l'une des valeurs du select au niveau des options dans le html
    if (valueSelect === "choix") {
        selectError.classList.remove("d-none");
        inputSelect.classList.add("border");
        inputSelect.classList.add("border-danger");
        inputSelect.classList.remove("border");
        inputSelect.classList.remove("border-success");
    } else {
        selectError.classList.add("d-none");
        inputSelect.classList.add("border");
        inputSelect.classList.add("border-success");
        inputSelect.classList.remove("border");
        inputSelect.classList.remove("border-danger");
    }

});