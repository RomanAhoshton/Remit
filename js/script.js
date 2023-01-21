const burger_icon =document.querySelector(".burger_icon");
const Close = document.getElementById("close");
const menu_nav=document.querySelector(".menu_nav");
const body=document.querySelector(".body1");
const footer =document.querySelector(".footer_input");



burger_icon.addEventListener("click",()=>{
    menu_nav.classList.add("active");
   
});

Close.addEventListener("click",()=>{
    menu_nav.classList.remove("active");
});

burger_icon.addEventListener("click",()=>{
    body.classList.add("lock");
});

Close.addEventListener("click",()=>{
    body.classList.remove("lock");
});


footer.addEventListener("click",()=>{
    footer.removeAttribute("placeholder");
});

const contactInput=document.querySelectorAll('.contact_input');
for(let i=0;i<contactInput.length;i++){
    let all=contactInput[i];
    all.onclick=function(){
        all.removeAttribute('placeholder');
    }
};


 const textArea=document.querySelector('.area');
 textArea.addEventListener('click',()=>{
    textArea.removeAttribute('placeholder')
 });



// const time1 = 1000;
// const step1 = 100;

// function outNum1(num, elem) {
//   let out2= document.querySelector("#out2");
//   n = 0;
//   let t = Math.round(time1 / (num / step1));
//   let interval = setInterval(() => {
//     n = n + step1;
//     if (n == num) {
//       clearInterval(interval);
//     }
//          out2.innerHTML=n;
//   }, t);
 
// }

// outNum1(100000, "#out2");











    











