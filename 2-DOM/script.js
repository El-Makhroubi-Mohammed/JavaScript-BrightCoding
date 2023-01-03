// **** Interagir avec le DOM HTML ****

// ---- Comprendre le DOM ----

// DOM - Document Object Model //Controller les composants HTML via JAVASCRIPT

// le Contenu d'une fenetre(windows) s'appelle document //par cotre fenetre(window) contient beaucoup des choses parmi ces choses le document

// Commands // >document : le contenu html, >window : tous les infos sur window, >document.location, >document.URL : "http://127.0.0.1:5500/index.html"

// document.getElementsByTagName('h1') : tous les infos sur le tag h1

// ---- The Query Selector ----

// Manipulation des DOM via javascript

// recuperer le tag <h1>

// const header = document.querySelector('h1');

// console.log(header); //<h1>DOM - Document Object Model</h1>

// const header = document.querySelector('.primary'); //recuperer la paragraphe qui contien la class primary //<p class="primary">para 3</p> //si on utlise . ca veut dir class

// console.log(header);

// const header = document.querySelector('.success'); //recuperer la premiere un seul element //<p class="success">para 1</p>
//resultat sous forme d'un objet avec querySelector
// console.log(header);

// const paras = document.querySelectorAll('.success'); //recuperer un tableau tous les element qui contient la class success //NodeList(2) [p.success, p.success]
//resultat sous forme d'un tableau
//console.log(paras);
//controller HTML via javaScript
// paras.forEach(para => console.log(para)); //recuperer avec la boucle forEach tous elements qui contient la class success


// const paras = document.querySelectorAll('h2'); //recuperer les tags h2 sans point 

// paras.forEach(para => console.log(para));

// const paras = document.querySelectorAll('.title');

// paras.forEach(para => console.log(para));

// const paras = document.querySelectorAll('div.myContent > h2'); //recuperer le tag <h2> qui est dans la div qui contient la class myContent
//recuperer : <h2 class="title">Title 3</h2>
// paras.forEach(para => console.log(para));

// const paras = document.querySelectorAll('p.success'); //<div class="success">div with success class</div>

// paras.forEach(para => console.log(para));

// ---- Autre Technique pour Interagir avec DOM ----

// get Element by Id        // One Element // la norme Id unique dans le DOM
// const header = document.getElementById('title'); //recuperer l'element qui a ID = title
// console.log(header);

// get Elements by Class        // une class peut partager entre plusieurs Elements dans le DOM
// const divisions = document.getElementsByClassName('content');
// console.log(divisions);

// get Elements by Tag           // Tag qui se repete plusieurs fois
// const paragraphs = document.getElementsByTagName('p');
// console.log(paragraphs);

// paragraphs.forEach(para => console.log(para)); // Error// paragraphs is not a table is a collection so we can not use forEach

// Use querSelector like getElementById

// const header = document.querySelector('#title'); //recuperer l'element dont le ID=title en utilisant querySelector et # qui signifie ID
// console.log(header); //<h1 id="title">DOM - Document Object Model</h1>

//La meilleur technique pour utiliser et selectionner est querySelector

// ---- Changer et Ajouter du contenu à la page ----
// Comment changer la valeur ou le contenu d'un tag HTML

// Changer le contenu d'un tag simple contenu Text

// const header = document.querySelector('h1');
// const header = document.querySelector('#title');

// console.log(header);
// console.log(header.innerText); //recuperer que le text du contenu //DOM - Document Object Model

// header.innerText = "javaScript in Bright Coding";

// header.innerText = header.innerText + " javaScript in Bright Coding";
// header.innerText += " javaScript in Bright Coding"; //Pro

// const headers = document.querySelectorAll('h2');

// headers.forEach((header, index) => {
//     header.innerText = "Mon titre " + (index + 1); // changer la valeur de tag h2 //boucle sur tout les h2
// })

// headers.forEach(header => {
//     header.innerText += " ." // Concatenation
// })

// dans le cas des tag comme <div> qui contient d'autres tags ...

// const divison = document.querySelector('.myContent');

// console.log(divison);
// console.log(divison.innerHTML);//recupere le contenu de div avec la classe myContent
//resultat : <h2 class="title">Title 3</h2><p class="primary">para 3</p>

// divison.innerHTML += "<a href='https://brightcoding.teachable.com/'>Bright Coding</a>"; //Ajouter un lien dans le tag div class="myContent"

// ---- Récupérer et Modifier l'attribue d'un DOM ----

// Modifier les attributs des tag HTML

// Changer le contenu de href from google to facebook

// const anchor = document.querySelector('a');

// console.log(anchor);
// console.log(anchor.innerText); //Google

//recuperer le contenu de l'attribute href
// console.log(anchor.getAttribute('href'));

//Changer la valeur de href
// anchor.setAttribute('href', 'https://www.facebook.com/');

// anchor.innerText = 'Facebook';

// const para = document.querySelector('p');

// para.setAttribute('class', 'error');//edit attribut
// para.setAttribute('style', 'color: red');//add attribut

// ---- Changer le Style CSS ----

// add a style : margin for example

// const header = document.querySelector('h1');

// header.setAttribute('style', 'margin: 50px');// le probleme c'est que on a ajoute style=margin:50px mais in n'a pas appliquer le premier style=color:green //il fait comme une modification //il a ecraser le tous ce qui dans style et ajouter le style dans setAttribute 

// console.log(header.id); //title
// console.log(header.style); //objet qui contient tous les informations sur style(margin, color, ...)

// console.log(header.style.color); //green 
// console.log(header.style.margin); //empty 
// console.log(header.style.margin); //empty //with setAttribute //50px


//La meilleur technique //equal to setAttribute because we affect a value
// header.style.margin = '100px';
// header.style.color = 'red';
// header.style.fontSize = '200px'; //font-size in html -> fontSize

//ecraser la valeur d'un attribut
// header.style.color = ''; //maintenant il y'a seulement margin et fontSize //color et ecraser ou supprimer

// console.log(header.style.margin); //100px //equal to getAttribute

// ---- Ajouter et Supprimer une Classe depuis un DOM ----

// const para = document.querySelector('p');

// console.log(para.classList); //classList -> les listes de Tag p //le Tag p ne contient aucune class

// para.classList.add('success'); //Ajoute la class success dans le tag p
// para.classList.remove('success');//supprimer la class success dans le tag p
// para.classList.add('error');//ajouter la class error

//Exercice

const paras = document.querySelectorAll('p');

paras.forEach(para => {
    if(para.innerText.includes('success')) {
        para.classList.add('success');
    }

    if(para.innerText.includes('error')) {
        para.classList.add('error');
    }
})



