// création de variable

// avec var la variable est globale
var firstVariabel = 1;

// avec const la variable est lié au block dans lequel est déclarée
const variableConst = "const";

// avec let la variable est lié au block dans lequel est déclarée
let myVariables = ["let", "var", "const"];

function addToArray(element, array) {
    array.push(element);
    // console.log("push done", array);
}

addToArray(variableConst, myVariables);

addToArray(firstVariabel, myVariables);

addToArray(7, [1, 2, 3, 4]);

function sum(a = 0, b = 0) {
    console.log('dans sum => ', a + b);
    return a + b; //
}

//console.log(sum(5, 1));

const anotherFunction = (param) => console.log(param);

// callback et function de niveau superieur 
// sum
function superieur(functionCallBack, a, b) { // sum {
    console.log('dans La superieur qui va appeler ', functionCallBack) // sum

    // appeler une function
    functionCallBack(a, b); // sum();
}

// superieur qui appelle sum() dans le callBack
superieur(sum, 5, 5);




// console.log('before iife');
// (function () {
//     console.log(`Hola From JS`);
// })()

// console.log('after invoked function')
// 
function multiply(a, b = 1) {
    return a * b;
}

// console.log(multiply(5, 2));
// // expected output: 10

// console.log(multiply(5));


function contact(name, firstname, callBack) {
    console.log(`Bonjour, je m'appelle ${name} ${firstname}`);

    let age = callBack();

    console.log('age => ', age);

    return name + firstname;
};

function getAge() {
    return 77;
}


contact('Jean ', 'Marc ', getAge);

function remplirForm(callback) {
    console.log()
    callback();
}


// let x = 5;
// let y = 4;
// let c;

function sum(a = 0, b = 0) {
    console.log(`Nous voulons ici calculer la somme de ${a} + ${b}`);
    return a + b;
}

console.log(résultat);

function multiplySum(callback, a = 0, b = 0, c = 1) {
    const résultat = sum(a, b);

    console.log(`Nous allons maintenant multiplier le résultat de ${résultat} par ${c}`);

    console.log('multiplySum =>', callback(a, b) * c);
    return (callback(a, b) * c);

}

multiplySum(sum, 5, 2, 2);

sum(1, 2);

multiplySum(sum, 1, 2, 3);