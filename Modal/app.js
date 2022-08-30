var subBtn = document.querySelector(".subscribe");
var closeBtn = document.querySelector(".close-btn");
var modalBg = document.querySelector(".modalBg");
var submitBtn = document.querySelector(".submit-btn");
var nameIn = document.querySelector(".userName");
var emailIn = document.querySelector(".email");


subBtn.addEventListener("click", function(){    
    modalBg.classList.add("showDailog");
});

closeBtn.addEventListener("click", function(){    
    modalBg.classList.remove("showDailog");
});

submitBtn.addEventListener("click", function(){   
    if(nameIn.value.length === 0 ){
        nameIn.style.border = "1px solid red";
          
    }
    if(emailIn.value.length === 0){
        emailIn.style.border = '1px solid red';
    }
    else{
        modalBg.classList.remove("showDailog");
    }
});