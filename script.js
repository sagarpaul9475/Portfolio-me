let mode=document.querySelector('.mode');
let icon=document.querySelector('.mode i');
let body=document.querySelector('body');

mode.addEventListener('click',()=>{
    body.classList.toggle('dark_mode');

    if(icon.getAttribute('class')=='ri-moon-fill'){
        icon.setAttribute('class','ri-sun-fill');
    }
    else{
        icon.setAttribute('class','ri-moon-fill');
    }
});

let bars=document.querySelectorAll('.bars');
let menu=document.querySelectorAll('.ul');

bars.addEventListener('click',()=>{
    menu.classList.toggle('show_menu');
})
