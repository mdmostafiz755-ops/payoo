let loginBtn=document.querySelector("#login-btn");
loginBtn.addEventListener("click",function(){
let mobile=document.querySelector("#mobile");
mobile=mobile.value;
let pasword=document.querySelector("#password");
pasword=pasword.value;
if(pasword==="1234" && mobile==="01311106790"){
    alert("logged in successfully");
    window.location.assign("./home.html");
}
else{
    alert("Invalid Credential");
}
})
