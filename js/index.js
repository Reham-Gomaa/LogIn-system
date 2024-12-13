var email = document.querySelector('#email');
var password = document.querySelector('#password');
var anchorIN = document.querySelector('#anchorIN');
//var url =( location.pathname).split("/").slice(0,location.pathname.split("/").length-1).join("/");

var users = [];

if(localStorage.getItem('allUsers')){
    users = JSON.parse(localStorage.getItem('allUsers'));
};

anchorIN.addEventListener('click' , function(){
    signIn();
})

function signIn(){
    for(let i = 0; i < users.length; i++){
        if(users[i].userEmail == email.value & users[i].userPassword == password.value){
            anchorIN.setAttribute('href' , './home.html');
            localStorage.setItem('loggedUser',JSON.stringify(users[i].userName))
            // location.replace(url + "/home.html");
            anchorIN.previousElementSibling.firstElementChild.classList.replace('d-block' , 'd-none');
        }else{
            anchorIN.previousElementSibling.firstElementChild.classList.replace('d-none' , 'd-block');
        }
    }
}

