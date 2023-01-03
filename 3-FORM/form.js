// **** Les Formulaires et Les Evénements ****

// ---- PreventDefault & Form Submit ----

// const form = document.querySelector('.my-form');
//const username = document.querySelector('#username'); //pointer sur l'element qui contient id=username 

// form.addEventListener('submit', () => { //apres avoir cliquer sur le button il affiche "form submitted" dans une second et aprés la page actualiser a nouveau 
//     console.log('form submitted')
// })

// form.addEventListener('submit', e => { 
//     e.preventDefault() //desactiver l'actualisation de la page 
//     console.log('form submitted')
// })


//La 1ere technique
// form.addEventListener('submit', e => { 
//     e.preventDefault() //desactiver l'actualisation de la page 
//     console.log(username.value) //recuperer la valeur dans le input avec id=username
// })

//La 2ere technique
//cette technique ca marche avec -> id=username & name=username
// form.addEventListener('submit', e => { 
//     e.preventDefault() //desactiver l'actualisation de la page 
//     console.log(form.username.value) //recuperer la valeur dans le input directement avec le form et sans pointer sur const username //directement avec le form
// })

// ---- Expression Régulière en Javascript ----

//Systeme de validation : on peut pas ecrire un number dans un input par exemple
//https://regex101.com/  //regular expressions training

// ---- Appliquer REGEX sur un contenu ----

// let username = "Bright ";

// let pattern = /[a-zA-Z0-9]{5,10}/; //autoriser alphabets et numbers avec une taille de 5 à 10 chars
// let pattern = /^[a-zA-Z0-9]{5,10}$/; //commence par alphanumerique et qui se termine par alphanumerique

// console.log(pattern.test(username));

// if (pattern.test(username)) {
//     alert('Valid');
// }else {
//     alert('InValid');
// }

// ---- Valider un formulaire en Submit ----

// appliquer sur username -> alphanumerique entre 5 et 10 chars

// const form = document.querySelector('.my-form');
// const feedback = document.querySelector('.feedback');

// let pattern = /^[a-zA-Z0-9]{5,10}$/;

// form.addEventListener('submit', e => { 
//     e.preventDefault() 

//     let username = form.username.value
//     if (pattern.test(username)) {
//         feedback.textContent = "This username is Valid"
//     }else {
//         feedback.textContent = "Username must contain letters Only & be between 5 and 10 chars"
//     }
    
// })

// ---- Validation instantanée - keyup Event ----

//Verifier input en temps reel sans utiliser submit 

const form = document.querySelector('.my-form');
const myUsername = document.querySelector('#username');
const feedback = document.querySelector('.feedback');

let pattern = /^[a-zA-Z0-9]{5,10}$/;


form.addEventListener('submit', e => { 
    e.preventDefault() 

    let username = form.username.value
    if (pattern.test(username)) {
        feedback.textContent = "This username is Valid"
    }else {
        feedback.textContent = "Username must contain letters Only & be between 5 and 10 chars"
    }
    
})

myUsername.addEventListener('keyup', () => { //or e.target.value //pour recuperer la valeur de username
    
    let username = form.username.value
    if (pattern.test(username)) {
        form.username.setAttribute('class', 'success')
        feedback.textContent = "This username is Valid"
    }else {
        form.username.setAttribute('class', 'error')
        feedback.textContent = "Username must contain letters Only & be between 5 and 10 chars"
    }
})





