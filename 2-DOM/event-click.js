// ---- AddEventListerner - Event Click -----

let btn = document.querySelector('button');

//evenement click -> mot reserver de HTML
// () -> method anonym
// btn.addEventListener('click', () => {
//     console.log('button clicked');
// })

// btn.addEventListener('click', () => {
//     alert('button clicked');
// })

//plusieurs elements

let items = document.querySelectorAll('li');

// items.forEach(item => {
//     item.addEventListener('click', () => {
//         console.log('item clicked');
//     })
// })

//display the value of the element clicked
// items.forEach(item => {
//     item.addEventListener('click', () => {
//         console.log(item);
//     })
// })

//using the events //ajouter un objet e ou n'importe quel nom //recuper tous les informations qui ont une relation avec cette clique //MouseEvent
// items.forEach(item => {
//     item.addEventListener('click', (e) => {
//         console.log(e);
//     })
// })

//recuperer la cible : target //<li>Angular</li>
// items.forEach(item => {
//     item.addEventListener('click', e => {
//         console.log(e.target);
//     })
// })

//appliquer un style
// items.forEach(item => {
//     item.addEventListener('click', e => {
//         e.target.style.textDecoration = "line-through";
//     })
// })

// ---- Ajouter & Supprimer un Element DOM ----

const ul = document.querySelector('ul');

// ul.remove(); //supprimer tous l'element ul

//supprimer que l'evenement clique
// items.forEach(item => {
//     item.addEventListener('click', e => {
//         e.target.remove();
//     })
// })

btn.addEventListener('click', () => {
    // ul.innerHTML += '<li>someThing</li>'; //pas pro
    const li = document.createElement('li'); //creation de l'element li
    li.textContent = "Do something"; //ajouter le contenu de li
    // ul.append(li); //add li to ul //ajouter a la fin de la liste
    ul.prepend(li); //add li to ul //ajouter a l'entete de la liste
})

// ---- Event Propagation & Delegation ----
// Propagation
// ul.addEventListener('click', () => {
//     console.log('I AM UL');
// })

// bubbling : display -> I AM LI and I AM LI
// items.forEach(item => {
//     item.addEventListener('click', e => {
        
//         console.log('I AM LI');
//         e.stopPropagation(); //Stop propagation of bubbling //execute without call parent
//         e.target.remove();
//     })
// })

// Delegation
//delegation pour ne pas tomber dans la propagation
// ul.addEventListener('click', (e) => {
//     console.log(e.target); // if i click VueJs // <li>VueJS</li>
// })

//test remove
ul.addEventListener('click', (e) => {
    e.target.remove(); // ca marche tres bien //works fine
})

// ---- Autres Event comme Copy & Mousemove ----

// const content = document.querySelector('.content');//la class content

const content = document.querySelector('body'); //pour tout le document

//verifier si qlq copier un text
content.addEventListener('copy', () => {
    console.log("Please my content is copyright !!!");
})

//Mousemove : coordinates

const zone = document.querySelector('.zone');
const bord = document.querySelector('.bord');

// zone.addEventListener('mousemove', e =>{
//     console.log(e); //mouse coordinates in zone 
// })

//display coordinates in span
// zone.addEventListener('mousemove', e =>{
//     bord.innerText = `X : ${ e.offsetX } - Y : ${ e.offsetY }`; //display mouse coordinates in span par apport a div
// })

//coordinates par apport a la page
zone.addEventListener('mousemove', e =>{
    bord.innerText = `X : ${ e.pageX } - Y : ${ e.pageY }`; //par apport a la page
})

