$(document).ready(hello());

function hello(){
$('body *').each(function(){
let topNum = (Math.random() * 500) + 'px';
let leftNum = (Math.random() * 500) + 'px';
     $(this).css({
            'position' : 'absolute',
            'top' : topNum,
            'left' : leftNum,
        })
    });
}