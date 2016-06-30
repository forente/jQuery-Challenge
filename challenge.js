$(document).ready(function(){
  var numOfButtons = 9;

  for (var i = 1; i <= numOfButtons; i++) {
    $('body').append('<button value='+i+'>'+ i+'</button>');
  }

  


});
