$(document).ready(function(){
  // do ajax... then when we get the JSON back... 
  // use it to set the background of the desired li
  $("#get_color").click(function(e) {
    e.preventDefault();
    $.post('/color', function(data) {
      $('#color_me li').eq(data.cell - 1).css('background-color', data.color);    
    });
  });
});
