const main_container=document.querySelector(".main-container"),
signupBtn=main_container.querySelector("#signup-btn"),
loginBtn=main_container.querySelector("#login-btn");
console.log(loginBtn);
console.log(signupBtn);
let text=document.getElementById("msg-txt");

signupBtn.addEventListener("click",(event)=>{
    event.preventDefault();
    const pswrd= document.getElementById("password").value;
    const  confirmPswrd= document.getElementById("cnfrmPassword").value;
    if(pswrd != confirmPswrd){
        signupBtn.classList.add('disable');
    }
    else{

    }




});




loginBtn.addEventListener("click",()=>{
    console.log("hello");





});