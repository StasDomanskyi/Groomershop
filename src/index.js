import "./index.pug"
import  "./index.sass"
import "../assets/img"


import'../src/slider'
import "../owl/owl.carousel.min.css"
import $ from "jquery"
import "../owl/owl.carousel.js"

$(document).ready(function(){
    $(".owl-carousel").owlCarousel();
});