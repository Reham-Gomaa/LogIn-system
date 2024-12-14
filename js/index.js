var email = document.querySelector('#email');
var password = document.querySelector('#password');
var loginBtn = document.querySelector('#loginBtn');
let url =( location.pathname).split("index.html").slice(0,1).join();

var users = [];

if(localStorage.getItem('allUsers')){
    users = JSON.parse(localStorage.getItem('allUsers'));
};

loginBtn.addEventListener('click' , function(){
    signIn();
})

function signIn(){
    for(let i = 0; i < users.length; i++){
        if(users[i].userEmail == email.value & users[i].userPassword == password.value){
            localStorage.setItem('loggedUser',JSON.stringify(users[i].userName))
            location.replace(url + "home.html");
            loginBtn.previousElementSibling.firstElementChild.classList.replace('d-block' , 'd-none');
        }else{
            loginBtn.previousElementSibling.firstElementChild.classList.replace('d-none' , 'd-block');
        }
    }
}