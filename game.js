$( document ).ready(function() {
    //console.log( "ready!" );
});

var randomResult;
var lost = 0;
var win = 0;
var previous = 0;

var resetStart = function (){
$(".crystals").empty();

var images = [
    'https://media1.giphy.com/media/lz7Dtl4j9flnIngNXK/200w.webp?cid=790b76115d22e6594f376c4f512c6f79&rid=200w.webp',
    'https://media0.giphy.com/media/QJJOIu0ifQ6fS/giphy.webp?cid=790b76115d22ea1b55304257518030f2&rid=giphy.webp',
    'https://media1.giphy.com/media/26gsdS1KCyxwTl6IU/200w.webp?cid=790b76115d22eadb4661676d45598ffa&rid=200w.webp',
    'https://media.tenor.com/images/e934161c695a77537ea334ad11852aab/tenor.gif'
]
    randomResult  = Math.floor(Math.random() * 101)  + 19;
console.log(randomResult)

$("#result").html('Random Result: ' + randomResult);

for(var i=0; i < 4; i++){
    var random = Math.floor(Math.random() * 11) + 1;
    //console.log(random);

    
     
    var crystal = $("<div>");
         crystal.attr({
           "class": 'crystal',
           "data-random": random
          });
crystal.css({
    "background-image":"url('" + (images[i]) + "')",
    "background-size":"cover"

});
        $(".crystals").append(crystal);
   }

$("#previous").html("Total Score:" + previous);
}
resetStart();

$(document).on('click', ".crystal", function() {

    var num = parseInt($(this).attr('data-random'));
    previous += num;

$("#previous").html("Total Score:" + previous);    
    console.log(previous);
    
    if(previous > randomResult){
        lost++;
        $("#lost").html("Losses: " + lost);
        previous = 0;
        
        resetStart();
    }
    else if(previous === randomResult){
        win++;
        $("#win").html("Wins: " + win);
        previous = 0;
    
        resetStart();
    }
    
  
});