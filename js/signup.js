var uname = document.querySelector('#uname');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var anchorUP = document.querySelector("#anchorUP");

var users = [];

if(localStorage.getItem('allUsers')){
    users = JSON.parse(localStorage.getItem('allUsers'));
};

function store(){
    localStorage.setItem('allUsers' , JSON.stringify(users));
};

anchorUP.addEventListener('click' , function(){
    signUp();
});

function signUp(){
    if(uname.value == '' | email.value == '' | password.value == ''){
        anchorUP.previousElementSibling.children[0].classList.replace('d-none' , 'd-block');
        anchorUP.previousElementSibling.children[1].classList.replace('d-block' , 'd-none');
        anchorUP.previousElementSibling.children[2].classList.replace('d-block' , 'd-none');
        anchorUP.previousElementSibling.children[3].classList.replace('d-block' , 'd-none');
        console.log('fady')
        return false;
    }
    for(var i = 0; i < users.length; i++){
        if(users[i].userEmail == email.value){
            anchorUP.previousElementSibling.children[1].classList.replace('d-none' , 'd-block');
            anchorUP.previousElementSibling.children[0].classList.replace('d-block' , 'd-none');
            anchorUP.previousElementSibling.children[2].classList.replace('d-block' , 'd-none');
            anchorUP.previousElementSibling.children[3].classList.replace('d-block' , 'd-none');
            console.log('mwgood ya m3alem')
            return false;
        }
    }
    if(validate(uname) & validate(email) & validate( password)){
        var user = {
            id : `${Math.random()*10000} - ${Math.random()*10000}`,
            userName : uname.value,
            userEmail : email.value,
            userPassword : password.value
        }
        users.push(user);
        store();
        console.log(users);
        anchorUP.setAttribute('href' , './index.html');
        // location.replace(url + "/index.html");
    }else{
        anchorUP.previousElementSibling.children[2].classList.replace('d-none' , 'd-block');
        anchorUP.previousElementSibling.children[0].classList.replace('d-block' , 'd-none');
        anchorUP.previousElementSibling.children[1].classList.replace('d-block' , 'd-none');
        anchorUP.previousElementSibling.children[3].classList.replace('d-block' , 'd-none');
    }
};
function validate(data){
    var regex = {
        uname : /^[a-z]{3,10}$/i,
        email :  /^[a-zA-Z0-9._%\+-]+@[a-zA-Z0-9\.-]+\.[a-zA-Z]{2,}$/,
        password : /^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/
    }
  
    if(regex[data.id].test(data.value)){
        anchorUP.previousElementSibling.children[3].classList.replace('d-none' , 'd-block');
        anchorUP.previousElementSibling.children[0].classList.replace('d-block' , 'd-none');
        anchorUP.previousElementSibling.children[1].classList.replace('d-block' , 'd-none');
        anchorUP.previousElementSibling.children[2].classList.replace('d-block' , 'd-none');
        console.log('tmam')
        return true;
    }else{
        anchorUP.previousElementSibling.children[2].classList.replace('d-none' , 'd-block');
        anchorUP.previousElementSibling.children[0].classList.replace('d-block' , 'd-none');
        anchorUP.previousElementSibling.children[1].classList.replace('d-block' , 'd-none');
        anchorUP.previousElementSibling.children[3].classList.replace('d-block' , 'd-none');
        console.log('invalid')
        return false;
    }
}