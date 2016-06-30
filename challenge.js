$(document).ready(function(){
  var numOfButtons = 9;

  for (var i = 1; i <= numOfButtons; i++) {
    $('body').append('<button value='+i+'>'+ i+'</button>');
  }
  $('body').append("<div></div>");

var isStored = false;
var buttonVal =0;
  $('button').on('click', function(){

    if(isStored){
      $('div').append(buttonVal +" + "+$(this).val()+"=" (buttonVal + $(this).val()) );
      isStored = !isStored;
    }
    else{
      buttonVal =  $(this).val();
    }

  });


});
