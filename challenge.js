$(document).ready(function(){
  var numOfButtons = 9;

  for (var i = 1; i <= numOfButtons; i++) {
    $('body').append('<button value='+i+'>'+ i+'</button>');
  }
  $('body').append("<div id='message'></div>");

var isStored = false;
var buttonVal =0;
  $('button').on('click', function(){

    if(isStored){
      $('#message').html("<div id='message'></div>");
      $('#message').append(buttonVal +" + "+$(this).val()+"= " + (Number(buttonVal) +  Number($(this).val())) );

      isStored = !isStored;
    }
    else{
      buttonVal =  $(this).val();
      isStored = !isStored;
      console.log( buttonVal);

    }

  });


});
