import "./index.pug"
import  "./index.sass"
import "../assets"

// COMPONENTS

import "./components/header"
import "./components/slider"
import "./components/footer"
import "./components/clients"
import "./my-jquery.js"



/* let rightArrow = document.querySelector('.right');
let leftArrow = document.querySelector('.left');
let container = document.querySelector('.clients__inner');
console.dir(leftArrow);

rightArrow.addEventListener('click',() => {
    moveRight();
});

leftArrow.addEventListener('click',() => {
    moveLeft();
})

function moveRight() {
    let container = document.querySelector('.clients__inner');
    container.scrollLeft = '100px';
    console.dir(container);
    /* let first = container.classList.includes('transitioned1');
    let second = container.classList.includes('transitioned2');
    let third = container.classList.includes('transitioned3');
    if (!(first || second || third)) {
        container.classList.push('transitioned1');
    } else if (first) {
        container.classList.remove('transitioned1');
        container.classList.add('transitioned2');
    } else if (second) {
        container.classList.remove('transitioned2');
        container.classList.add('transitioned3');
    } else if (third) {
        return;
    } */
/* }

function moveLeft() {
    let container = document.querySelector('.clients-inner');
    
    let first = container.classList.includes('transitioned1');
    let second = container.classList.includes('transitioned2');
    let third = container.classList.includes('transitioned3');
    if (third) {
        container.classList.remove('transitioned3');
        container.classList.add('transitioned2')
    } else if (second) {
        container.classList.remove('transitioned2');
        container.classList.add('transitioned1');
    } else if (first) {
        container.classList.remove('transitioned1');
    }
} */