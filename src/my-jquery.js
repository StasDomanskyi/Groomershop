import $ from "jquery"

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
})