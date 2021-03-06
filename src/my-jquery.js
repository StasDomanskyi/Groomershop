import $ from "jquery"
import PopUp from "./components/popup/popup"

let popUp = new PopUp('.submit__btn');
popUp.init();

$(function() {
    let counter = 0;
    $('.right').click(function () {
        if (counter > 2) {
            counter = 2;
        }
        
        if (counter === 2) {
            $('.clients__inner').animate({
                left: '-270vw'
            },"fast");
        }

        if (counter === 1) {
            $('.clients__inner').animate({
                left: '-182vw'
            },"fast");
            counter++;
        }

        if (counter === 0) {
            $('.clients__inner').animate({
                left: '-93vw'
            },"fast");
            counter++;
        }             
    });


    $('.left').click(function () {
        if (counter === 2) {
            $('.clients__inner').animate({
                left: '-182vw'
            },"fast");
            counter--;
        } else if (counter === 1) {
            $('.clients__inner').animate({
                left: '-93vw'
            },"fast");
            counter--;
        } else if (counter === 0) {
            $('.clients__inner').animate({
                left: '-4rem'
            },"fast");
        }           
    });

    $('.submit__btn').click(function(e) {
        e.preventDefault();
        popUp.openModal();
    });
});