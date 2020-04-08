const sentence = 'this is my sentence';

var array = sentence.split(" ");

console.log (array);

console.log(array.forEach(function(e){
    console.log(e.toUpperCase())
}));

