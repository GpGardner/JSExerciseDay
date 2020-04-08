$(document).ready(addToList);

$('#list').keydown(function(e){
    addToList();
})

function addToList(){
    const content = $('#list').val()
    $('.divlist').append('<p>'+content+'</p>');
    $('#list').val('');
}