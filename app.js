document.addEventListener('DOMContentLoaded', addToList);

function addToList() {
    let btn = document.querySelector('button');

    btn.addEventListener('click', function () {
        let name = prompt('quel est votre nom');
        let response = prompt('est ce que tu veux apprendre les callback en js?');

        alert(`Merci ${name} pour ${response}`)
    })
}