var nameText=document.querySelector("#username");
var passwordText=document.querySelector("#password");
var loginStateText=document.querySelector("#login-state");
var loginButton=document.querySelector(".login-button");
var noAccountText=document.querySelector(".to-register");
var loginHeader=document.querySelector(".login-header");
var loginForm=document.querySelector(".login-form");
var container=document.querySelector(".container");
var registerForm=document.querySelector(".register-form");
var registerButton=document.querySelector(".register-button");
var registerNameText=document.querySelector("#register-username");
var registerPasswordText=document.querySelector("#register-password");
var registerEmailText=document.querySelector("#register-email");
var showErrorText=document.querySelector("#register-state");
var resetPasswordText=document.querySelector(".to-reset-password");
var backButton=document.querySelector(".fa-arrow-left")
var passwordForm=document.querySelector(".password-form");
var sendCodeButton=document.querySelector(".send-code-button");
var changeButton=document.querySelector(".change-button");
var sendCodeInfo=document.querySelector("#send-code-state");
var passwordErrorText=document.querySelector("#password-state");
var passwordCode=document.querySelector("#password-code");
var newPassword=document.querySelector("#new-password");
var confirmPassword=document.querySelector("#confirm-password");


var upperCaseLetters = /[A-Z]/g;
var numbers = /[0-9]/g;
var lowerCaseLetters = /[a-z]/g;
       
loginButton.addEventListener("click",function(){
    
    login();

});

registerButton.addEventListener("click",function(){
      
    register();
    
});
        
function login(){
    
    if(nameText.value=="" || passwordText.value==""){

        loginStateText.textContent="Boş Alanları Doldurunuz"

    }else{
            
        loginStateText.textContent="Giriş Başarılı";

    }
   
}



function register(){
  
    if(registerEmailText.value=="" || registerNameText.value=="" || registerPasswordText.value==""){
        
        showErrorText.textContent="Boş Alanları Doldurunuz"    

    }else if(registerNameText.value.length<5){
        
        showErrorText.textContent="Kullanıcı Adı En Az 5 Karakter Olmalıdır"
        
    }else if(!(registerPasswordText.value.match(upperCaseLetters))){
   
        showErrorText.textContent="Şifre Büyük Harf İçermelidir"
       
    }else if(!(registerPasswordText.value.match(lowerCaseLetters))){
    
        showErrorText.textContent="Şifre Küçük Harf İçermelidir"
        
    }else if(!(registerPasswordText.value.match(numbers))){
       
        showErrorText.textContent="Şifre Rakam İçermelidir"
        
    }
    else if(registerPasswordText.value.length<5){
        
        showErrorText.textContent="Şifre En Az 5 Karakterden Oluşmalıdır"
        
    }else {

        backLoginPage();
        
    }
}

noAccountText.addEventListener("click",function(){

    loginForm.classList.add("hide");
    loginHeader.lastElementChild.textContent="REGISTER";
    registerForm.classList.remove("hide");
    backButton.classList.remove("unvisible");
    
    
});

resetPasswordText.addEventListener("click",function(){

    loginForm.classList.add("hide");
    loginHeader.lastElementChild.textContent="PASSWORD";
    passwordForm.classList.remove("hide");
    backButton.classList.remove("unvisible");

});

function togglePassword(element){

    element.classList.toggle("fa-eye");
    element.classList.toggle("fa-eye-slash");
    if(element.previousElementSibling.type=="password"){
    
        element.previousElementSibling.type="text";

    }else{
 
        element.previousElementSibling.type="password";

    }
}

backButton.addEventListener("click",function(){

    backLoginPage();

});

function backLoginPage(){

    backButton.classList.add("unvisible");
    loginForm.classList.remove("hide");
    loginHeader.lastElementChild.textContent="LOGIN";
    registerForm.classList.add("hide");
    passwordForm.classList.add("hide");
    loginStateText.textContent="İşlem Başarılı";
    
}

var time=new Date();
var hour=time.getHours()<10 ? "0"+time.getHours():time.getHours();
var minute=time.getMinutes()<10 ? "0"+time.getMinutes():time.getMinutes();

sendCodeButton.addEventListener("click",function(){
    
    sendCodeInfo.textContent="Kod Gönderildi ("+hour+":"+minute+")";
    
});

changeButton.addEventListener("click",function(){

    if(passwordCode.value=="" || newPassword.value=="" || confirmPassword.value==""){
        
        passwordErrorText.textContent="Boş Alanları Doldurunuz"
       
    }else if(!(newPassword.value.match(upperCaseLetters))){

        passwordErrorText.textContent="Şifre Büyük Harf İçermelidir"   

    }else if(!(newPassword.value.match(lowerCaseLetters))){

        passwordErrorText.textContent="Şifre Küçük Harf İçermelidir" 

    }else if(!(newPassword.value.match(numbers))){

        passwordErrorText.textContent="Şifre Rakam İçermelidir"   

    }
     else if(newPassword.value!=confirmPassword.value){
        
        passwordErrorText.textContent="Şifre Onaylama Başarısız";     

    }else{

        backLoginPage();
        
    }




     








});