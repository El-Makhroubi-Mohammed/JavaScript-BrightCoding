// alert("Salam la plus Pro pratique") // (3)

//Chptr2 Premier Programme JAVASCRIPT Console Log, error & warn

//Single line Comments

//Afficher un normal message dans l'anglet Console
/*console.log("Salam log")

//Afficher une erreur
console.error("Salam log")
console.warn("Salam log") */

//Deconseiller d'utiliser var
// var name = "Mohammed ElMakhroubi";

//La meilleur technique pour declarer une variable in javaScript
// let age = 21;

// if(name){
//     let i = 1;//La difference entre var est let 
// }
//Affiche 1 si var
//Affiche Error si let parce que la variable est dans une fonction locale
// console.log(i); 

//Interdit de changer la valeur const sinon erreur 
//Inpossible de redefini une const
// const PI = 3.14;

// //Non pro
// status = true;

// console.log(name, age, PI, status);



// ---- Les Chaînes de Caractères - Strings ----
// String
// let email = 'mohammedelmakhroubi@gmail.com';
// console.log(email);

// //String Concatenation
// let firstName = 'Mohammed';
// let lastName = 'Elmakhroubi';

// let fullName = firstName + ' ' + lastName; //Concatenation of Strings with +
// console.log(fullName);

// //Getting Characters
// console.log(fullName[9]);

// //String Length
// console.log(fullName.length);

// //String Methodes
// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());

// let position = email.indexOf('.');//position of . in email //The first position of index
// console.log(position);

// let email = 'mohammedelmakhroubi@gmail.com';

// let result = email.lastIndexOf('m');

// let result = email.slice(0, 8);//Display : mohammed //from index 0 to 8

// let result = email.substr(8, 10);//Display elmakhroubi //from the index 8 take 10 characters

//let result = email.replace('m', 'r'); //replace just the first char

// let result = email.replace(/m/g, 'r'); //Regular expression //g to replace the char in the whole string

// let result = email.replace('mohammed', 'adil');

// console.log(result);

// ---- Manipuler les numéros - NUMBERS ----

// const PI = 3.14;
// let raduis = 10;

// let surface = PI * raduis ** 2; //Surface = PI * raduis ** 2

// console.log(surface);

// // P = (L + l) * 2  //Perimetre

// let longueur = 5;
// let largeur = 10;

// let perimetre = (longueur + largeur) * 2;

// // B I D M A S   // Bidmas stands for Brackets, Indices, Division/Multiplication, Addition/Subtraction.

// console.log(perimetre);

// console.log(PI, raduis);

// operations  +, -, /, *, **, %

// console.log(raduis / 2);
// console.log(raduis + 2);
// console.log(raduis - 2);
// console.log(raduis ** 2);
// console.log(raduis * 2);
// console.log(raduis % 2);

// let increment = 1;

// increment = increment + 1;

// increment++;

// increment = increment + 4;
// increment += 4; //equal to increment = increment + 4;

// increment = increment - 4;
// increment -= 4;

// increment = increment * 4;
// increment *= 4;

// increment = increment / 4;
// increment /= 4; //la meilleur techenique la plus utilisé et pro

// console.log(increment);

// let likes = 100;

// // console.log(likes / 'fhfhf'); //NaN : Not a Number

// console.log('You have : ' + likes + ' likes');//with + it works fine : Concatenation

// ----    MODÈLES DE CHAÎNES - Template Strings ----

// Template Strings
// let course = 'Learn javaScript from scratch';
// let instructor = 'Mohamed IDBRAHIM';
// let students = 200;

// Concatenation Strings
// let result = 'Course name : ' + course + ' by ' + instructor + ' has ' + students + ' students '; //hard to use and Non pro
// console.log(result);

// Template Strings
// let result = `Course name : ${ course } by ${ instructor } has ${ students } students`; //The best practice
// console.log(result);

// HTML Template
// let content = `
//     <h1>${ course }</h1>
//     <p>Instructor : ${ instructor }</p>
//     <em>Students : ${ students }</em>
// `
// console.log(content);

// ---- Les Tableaux - ARRAYS ----

// let courses = ['angular', 'react', 'Laravel'];

// console.log(courses[1]);

//overRide : redefinition
// courses[1] = 'ReactJS';
// courses[0] = 'SvelteJS';

// console.log(courses);

//Flexibility of javaScript //declarer plusieurs types de variables
// let random = ['Angular', 10, true];
// console.log(random);

// let result = courses.join(' - ');

// let result = courses.indexOf('Laravel'); //javaScript sensible à la case : il y'a une difference entre la Majuscule et miniscule
// let result = courses.indexOf('laravel'); //laravel result : -1 // -1 si il trouve rien

// console.log(result);

// let result = courses.push('SveltJS'); //add new element in the end of array courses
// courses.unshift('Symfony'); //add the element in the start of array
// courses.shift(); //delete the first element of array
// courses.pop(); //delete the last element added in the end of array
// courses.pop(); //delete the last element in the array

// console.log(courses);


// ---- Type null & undefined ----

// let currentYear;
// console.log(currentYear, currentYear + 1, `This year is : ${ currentYear }`); //undefined NaN "This year is : undefined"

// let currentYear = 2020;
// console.log(currentYear, currentYear + 1, `This year is : ${ currentYear }`); //2020 2021 "This year is : 2020"

// let currentYear = null;
// console.log(currentYear, currentYear + 1, `This year is : ${ currentYear }`); //null 1 "This year is : null"

// ----  Les opérateurs de Comparaison ----

// Booleans true or false
// let status = true;
// console.log(true, false, "true", 'false'); //true and false the values of boolean //"true" and 'false' are just Strings

// Methods return boolean
// let email = 'mohammedelmakhroubi@gmail.com';
// let result = email.includes('@'); //true
// let result = email.includes('!'); //false

// let courses = ['angular', 'laravel'];
// let result = courses.includes('laravel');//includes works with Strings and arrays
// console.log(result);

// Comparaison operators
// ==, !=, >, <, >=, <=
// let age = 35;

// console.log(age == 25);//false
// console.log(age == 35);//true
// console.log(age != 5);//true
// console.log(age > 5);//true
// console.log(age < 5);//false
// console.log(age <= 35);//true
// console.log(age >= 37);//false

// let name = 'Mohammed';

// console.log(name >= 'Mohammed');//true
// console.log(name >= 'mohammed');//false // m : code ASCII 109 // M : conde ASCII 77 // So m > M


// ---- Conversion des Types Number - String - Boolean ----

// let age = '35';

// console.log(age + 10);//3510 //Concatenation because '35' is String(Chaines de chars) and not a number

// age = Number(age); //Convert age to Number
// console.log(age + 10, typeof age);//45 "number"

// let age = 35;

// // age = String(age);
// // console.log(typeof age);//string

// age = Boolean(age);
// //every number > 0 is true (1, 2, 3, ...) // 0 is false 
// console.log(typeof age, age);//boolean true //if age = 0 -> false

// let age = '';

// age = Boolean(age);
// console.log(typeof age, age); //true if age = '0fhfhf' // false if age = ''; (chaines de chars vide -> false)

// ---- La comparaison Stricte ----

// let age = 35; //affectation //affecter une valeur a une variable

// console.log(age == 35);//true //l'egalite comparer une variable a une valeur
// console.log(age == '35');//true

// console.log(age != 35);//false
// console.log(age != '35');//false

// console.log(age === 35);//true //verify the values and the types //Comparer les valeurs et les types
// console.log(age === '35');//false //two different types

// console.log(age !== 35);//false 
// console.log(age !== '35');//true


// **** Structure de Contrôle ****

// ---- La Boucle For ----

// for(let i = 0; i < 5; i++) { //definir et initialiser une var
//      console.log(`iteration : ${ i }`);
// } 

// console.log('final iteration');

// let names = ['Mohammed', 'Adil', 'Ibrahim', 'Abdellah'];

// for(let i = 0; i < names.length ; i++) {
//     console.log(`name ${ i + 1 } : ${ names[i] }`);
// }

// ---- La Boucle While ----

//while et for c'est la meme chose : faire une boucle pour executer un script
// let i = 0; //definir et initialiser une var
// while( i < 5 ) { 
//      console.log(`iteration : ${ i }`);
//      i++; //incrementation //obligatoire sinon boucle infini
// } 

// console.log('final');

// let names = ['Mohammed', 'Adil', 'Ibrahim', 'Abdellah'];
// let i = 0;
// while( i < names.length ) {
//     console.log(`name ${ i + 1 } : ${ names[i] }`);
//     i++;
// }

// ---- La Boucle Do While ----

// let i = 0; 
// let i = 6; //la difference entre While et Do While c'est que Do While execute au mois une seul fois le core de Do While meme si la condition ca marche pas
// do{ 
//      console.log(`Value of i is : ${ i }`);
//      i++; 
// } 
// while( i < 5 ); //if i = 6 -> result is Value of i is : 6

// ----  Le Controle If ----

//Les conditions

// let note = 15;

// if(note == 15){
//      console.log('Trés bien');
// }

// if(note >= 15){
//      console.log('Trés bien');
// }

// if(note <= 10){
//      console.log('Passable');
// }

// let password = 'fhfhd55e';

// if(password.length < 8){
//      console.error('Password should be more than 8 characters !');
// }

// if(password.length >= 8){
//      console.log('Valid password');
// }

// ---- Else & If Else ----

// if(password.length < 8){
//      console.error('Password should be more than 8 characters !');
// }
// else {
//      console.log('Valid password');
// }

// let note = 19;

// if(note == 20) {
//      console.log("Excellent");
// }
// else if(note >= 15) {
//      console.log("Bien");
// }
// else if(note >= 12) {
//      console.log("Assez bien");
// }
// else if(note >= 10) {
//      console.log("Passable")
// }
// else {
//      console.warn("Vous etes pas capable");
// }

// ----  Les Opérateurs Logiques || et && ----

// let password = 'ffhfh@hd55e';

// ou or || , et and &&

// if(password.length < 8 || !password.includes('@')){ //Condition password : lenght < 8 and ne contient pas @ //Invalid password // !password.includes('@') : negation with !
//      console.error('Invalid password');
// }
// else {
//      console.log('Valid password');
// }

// if(password.length >= 8 && password.includes('@')){ //Condition password : lenght < 8 and ne contient pas @ //Invalid password // !password.includes('@') : negation with !
//      console.log('Valid password');
// }
// else {
//      console.error('Invalid password');
// }

// ---- L'operateur de la Negation ! ----

// let user = false;

// if(user) {
//      console.log('user is false');
// }
// else {
//      console.log('user is true');
// }

// console.log(!true); //false
// console.log(!false); //true

// if(!user) { //La negation
//      console.log('user is true');
// }
// else {
//      console.log('user is false');
// }

// ---- Break & Continue dans une Boucle ----

// let numbers = [10 , 82, 28, 0, 35, 100, 54, 50, 12];

// for (let i = 0; i < numbers.length; i++) {
     
//      if(numbers[i] == 0) {
//           continue;// Continue sans 0 ou skip 0
//      }

//      if(numbers[i] == 100) {
//           console.log('Congrats');
//           break; // break sorti carrement de la boucle //10 82 28 35 Congrats
//      }

//      console.log(`Score : ${ numbers[i] }`);
// }

// ----  Le Controle Switch Case ----

// let typeDeSang = 'B';

// if(typeDeSang == 'O') {
//      console.log('type de sang est O');
// }
// else if(typeDeSang == 'A') {
//      console.log('type de sang est A');
// }
// else if(typeDeSang == 'B') {
//      console.log('type de sang est B');
// }
// else if(typeDeSang == 'AB') {
//      console.log('type de sang est AB')
// }
// else {
//      console.log('type de sang est non valid');
// }

// let typeDeSang = 'A';

// switch(typeDeSang) {
//      case 'O':
//           console.log('type de sang est O');
//           break;
//      case 'A':
//           console.log('type de sang est A');
//           break;
//      case 'B':
//           console.log('type de sang est B');
//           break;
//      case 'AB':
//           console.log('type de sang est AB');
//           break;
//      default:
//           console.log('type de sang est non valid');

// }

// ---- La Condition Ternaire ----

// let age = 19;
// let result;

// if(age >= 18) {
//      result = 'Majeur';
// }
// else {
//      result = 'Mineur';
// }

// console.log(result);

// let age = 14;
// let result = (age >= 18) ? "Majeur" : "Mineur"; //La Condition Ternaire //if age >= 18 then "Majeur" else "Mineur"

// console.log(result);

// **** C'est quoi une Fonction ? ****

// INPUT x -> FUNCTION F: -> OUTPUT f(x)

//function peut return quelque chose ou return rien(void) juste faire un traitement

//Why use function //le role de function est trés important ex: si on va utiliser un code plusieurs fois c'est mieux d'utiliser function  

//how to create a function -> //function declaration //function //argument //{ statement }

// ---- Déclaration d'une fonction ----

// Function declaration  //Utiliser et appeler dans n'importe quel endroit

// function someThing() {
//     console.log('Salam les devs');//imagine si il y'a un grande traitement dans il est difficile de réécrir le traitement chaque fois //aussi eviter copie coller
// }

// someThing();
// someThing();
// someThing();

// function someThing() { //Work without problemes
//     console.log('Salam les devs');//On peut creer la function apres la declaration sans probleme
// }

// Function expression
// const speak = function() {
//     console.log('Je suis Mohammed');
// }

// speak(); // Utilisation aprés la declaracation (obligatoire)

// const speak = function() { //error initialisation et apres appeler la function
//     console.log('Je suis Mohammed');
// }

// ---- Arguments et Parametres ----

// const speak = function(name, gender) {
//     console.log(`Je suis ${ gender } ${ name }`);
// }

// speak('Mohammed', 'Mr');
// speak('Mohammed'); //Je suis undefined Mohammed //problem undefined

// const speak = function(name = 'Mohammed', gender = 'M.') { // Default Parameters
//     console.log(`Je suis ${ gender } ${ name }`);
// }

// speak(); //Prendre les valeurs par default 
// speak('Walid', 'Mr');//Je suis Mr Walid

// ---- La Valeur de Retour - Return ----

// const surfaceCercle = function(rayon) {
//     let surface = 3.14 * rayon ** 2;
//     console.log(surface)
// }

// surfaceCercle(20); //Just display the result(console.log) and not return a value

// const surfaceCercle = function(rayon) {
//     let surface = 3.14 * rayon ** 2;
//     return surface; //return a value
// }

// const surfaceCercle = function(rayon) {
//     return 3.14 * rayon ** 2; //More optimisation
// }


// let surface = surfaceCercle(10);

// console.log(surface);

// Exercice : surface d’un triangle rectangle

// const surfaceTriangleRectangle = function(largeur, longueur) {
//     let surface = largeur * longueur / 2;
//     return surface;
// }

// let surface = surfaceTriangleRectangle(5, 10);

// console.log(surface); //25

// ---- Fonction de Type fleche - Arrow Function ----

// const surfaceCercle = function(rayon) {
//     return 3.14 * rayon ** 2;
// }

// const surfaceCercle = (rayon) => {  //Arrow Function //Optimiser l'ecriture de la methode
//     return 3.14 * rayon ** 2;
// }

// const surfaceCercle = rayon => {  //On peut supprimer les () dans seul cas si il ya un seul parametre
//     return 3.14 * rayon ** 2;
// }

// const surfaceCercle = (rayon, fhfh, tdd) => {  //dans le cas de plusieurs parametres il est obligatoire d'utiliser les ()
//     return 3.14 * rayon ** 2;
// }

// const surfaceCercle = () => {  //dans le cas si il ya aucun parametre il est obligatoire d'ajouter ()
//     return 3.14 * rayon ** 2;
// }

// const surfaceCercle = rayon => 3.14 * rayon ** 2; //More and more optimisation //the best optimisation

// let surface = surfaceCercle(10);

// console.log(surface); 


// const surfaceCercle = function(rayon) { //Dans ce cas il est obligatoire d'utiliser {} parce que il ya plusieurs instructions
//     let surface = 3.14 * rayon ** 2;
//     return surface;
// }

// ---- Closure CallBacks - forEach ----

// let names = ['Imane', 'Mohammed', 'habiba', 'Ibrahim', 'Adil'];

//regular function
// names.forEach(function(name){ //forEach -> //callBacks in javaScript -> //function anonyme
//     console.log(name); //display all the names
// })


//row function
// names.forEach( (name, index) => { 
//     console.log(index, name); 
// })

// const persons = (name, index) => { 
//     console.log(index, name); 
// }

// names.forEach(persons);

// ---- Exemple ----
let names = ['Imane', 'Mohammed', 'habiba', 'Ibrahim', 'Adil'];
let html = ``;

const persons = (name, index) => { 
    html += `<li style="color:red">${ name }</li>`; 
}

names.forEach(persons);

let myElement = document.querySelector('.persons');

myElement.innerHTML = html;

// **** Les Objets Littéraux ****

// ---- Créer un Objet Javascript ----

//On a vu plusieurs structure de donnees
//On a vu les types primitif comme : boolean, number, string, undefined, null
//On a vus aussi les tableaux(des variables qui peut contenir plusieur informations)
//Maintenant en va voir les objets qui sont un petit peu complex que les tableaux

// Object 
//regrouper plusieurs information sur un seul endroit
//cle: valeur
//exemple : un utilisateur il contient plusieurs information -> nom, prenom, age, ...

// let user = {
//     //cle: valeur,
//     firstName: "Mohammed", //apres : on ajoute un espace ,mais avant le : on ne fait pas un espace //Si la valeur est String on utlise les doubles quotes "" et non pas les singles quotes '' //Oblige d'utiliser les doubles quotes ""
//     lastName: "ELMAKHROUBI",
//     age: 22,
//     email: "mohammedelmakhroubi@gmail.com",
//     active: true,
//     courses: ["Angular", "ReactJS", "VueJS"]
// }

//recuperer la valeur d'un attribut dans un objet //getter

// console.log(user.age);
// console.log(user.active);

//modifer la valeur d'un attribut dans un objet //setter

// user.email = "adilelmakhroubi@gmail.com";

// console.log(user);

//autre technique pour recuperer la valeur d'un attribut dans un objet

// console.log(user['firstName']);
// console.log(user['age']);

//autre technique pour modifer la valeur d'un attribut dans un objet

// user['age'] = 30;

// console.log(user);

// ---- Ajouter des Méthodes dans un Objet ----

// let user = {
//     //cle: valeur,
//     firstName: "Mohammed", //apres : on ajoute un espace ,mais avant le : on ne fait pas un espace //Si la valeur est String on utlise les doubles quotes "" et non pas les singles quotes '' //Oblige d'utiliser les doubles quotes ""
//     lastName: "ELMAKHROUBI",
//     age: 22,
//     email: "mohammedelmakhroubi@gmail.com",
//     active: true,
//     courses: ["Angular", "ReactJS", "VueJS"],
//     login: function() { //fucntion anonym or cluser
//         console.log('log with this user');
//     },
//     logout: function() {
//         console.log('Logout with this user');
//     }

//     // login() { //the second method to declare function in object
//     //     console.log('log with this user');
//     // }

//     // logout: () => { //the third methode arrow function
//     //     console.log('Logout with this user');
//     // }

//     //si une fonction est declarer dans un objet il s'appelle une method et non pas une function //diffrence between function and method

// }


// console.log(user.login());
// console.log(user.logout());

// ---- Le Mot réservé "this" ----

// let user = {
//     //cle: valeur,
//     firstName: "Mohammed", 
//     lastName: "ELMAKHROUBI",
//     age: 22,
//     email: "mohammedelmakhroubi@gmail.com",
//     active: true,
//     courses: ["Angular", "ReactJS", "VueJS"],
//     // login: function() { //function classic //il affiche seulement les attributs de l'objet
//     //     console.log('log with this user', this);
//     // },
//     login() { //la meme resultat que login: function() {} //function classic //il affiche seulement les attributs de l'objet
//         console.log('log with this user', this);
//     },
//     logout: () => { //arrow function //affiche window : tous les infos sur le document index //large visibility
//         console.log('Logout with this user', this);
//     },
//     // showCourses: function() {
//     //     console.log(this); //acceder a un attribut dans l'objet par une method dans le meme objet avec this
//     // }
//     // showCourses: function() {
//     //     console.log(this.courses); //show the courses
//     // }

//     showCourses: function() {
//         this.courses.forEach(course => console.log(course)); //boucle //course c'est un cluser
//     }

    
// }

// console.log(user.showCourses());

// console.log(user.login());
// console.log(user.logout());

// ---- Créer des Objets dans un Tableau ----

// const myCourses = [
//     {title: "Angular", price: 45},
//     {title: "ReactJS", price: 35},
//     {title: "VueJS", price: 50}
// ];

// let user = {
//     //cle: valeur,
//     firstName: "Mohammed", 
//     lastName: "ELMAKHROUBI",
//     age: 22,
//     email: "mohammedelmakhroubi@gmail.com",
//     active: true,
//     // courses: [
//     //     {title: "Angular", price: 45},
//     //     {title: "ReactJS", price: 35},
//     //     {title: "VueJS", price: 40}
//     // ],
//     courses: myCourses,
//     login() { 
//         console.log('log with this user', this);
//     },
//     logout: () => { 
//         console.log('Logout with this user', this);
//     },

//     showCourses: function() {
//         this.courses.forEach(course => console.log(course.title, course.price)); 
//     }

    
// }

// console.log(user.showCourses());

// console.log(user.login());
// console.log(user.logout());







