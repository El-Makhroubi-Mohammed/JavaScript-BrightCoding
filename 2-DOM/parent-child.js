// ---- Handling Parent Childen DOM with JS ----

//Acceder au parent et enfant de quel tag HTML

let myDivision = document.querySelector('div');

// console.log(myDivision); //get the first div

// console.log(myDivision.children); //recuperer les tag children sous forme HTMLCollection //ne peut pas boucle sur HTMLCollection
// console.log(Array.from(myDivision.children)); //convert HTMLCollection to Array
// Array.from(myDivision.children).forEach(element => {
//     console.log(element);
// })

//chaque tag peut contient plusieurs tags
//mais chaque tag contient seulement un seul parent

// console.log(myDivision.parentElement); //parent //<article></article>
// console.log(myDivision.parentElement.parentElement); //grand father //<body></body>

//les frères
// console.log(myDivision.nextElementSibling);//next element frere //la 2eme div
// console.log(myDivision.previousElementSibling);//previous element frere //null
// console.log(myDivision.nextElementSibling.previousElementSibling);//la premiere div


// example //add myClass to the childrens of div

Array.from(myDivision.children).forEach(element => {
    element.classList.add('myClass');
})

console.log(myDivision.nextElementSibling.previousElementSibling);