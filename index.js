let menu = document.getElementById('menu');
let close= document.getElementById('close');
let navbar=document.getElementById('navbar')

menuclicked=()=>{
    console.log('menu');
    navbar.style.display='flex';
    menu.style.display='none'
    close.style.display='flex'
};
menu.addEventListener('click',menuclicked)
close.addEventListener('click',()=>{
    navbar.style.display='none';
    menu.style.display='flex'
    close.style.display='none'
})