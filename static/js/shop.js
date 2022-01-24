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

var cart_btn = document.querySelector('.cart-btn');
var cart = document.querySelector('.cart');
var body = document.querySelector('.main');

cart_btn.onclick = function(){
    cart.classList.toggle('active');
    body.classList.toggle('path-active');
};