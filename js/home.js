var welcome = document.querySelector('h1');
var logout = document.querySelector('#logout');

var loggedUser = localStorage.getItem('loggedUser');

document.querySelector('#welcome').innerHTML += `<span>${loggedUser}</span>`;

logout.addEventListener('click' , function(){
    localStorage.removeItem('loggedUser');
})