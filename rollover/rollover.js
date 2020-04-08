$(document).ready(rollover())

function rollover(){
    $('h1').mouseenter(function(){
        $(this).addClass('strikeout')
    });
    $('h1').mouseleave(function(){
        $(this).removeClass('strikeout');
    });
};

