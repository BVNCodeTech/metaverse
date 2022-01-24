// hamburger menu
let ham = document.querySelector('.hamburger');
let menu = document.querySelector('.menu');
let close_ham = document.querySelector('.close-ham');

ham.addEventListener('click',show);
close_ham.addEventListener('click',hide);

function show(){
    menu.classList.add('active');
}

function hide(){
    menu.classList.remove('active');
}

// Sticky navbar
document.onscroll = function(){
    document.querySelector('.navbar').classList.add('active');
};